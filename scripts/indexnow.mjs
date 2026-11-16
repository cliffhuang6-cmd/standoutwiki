/**
 * IndexNow Integration Pipeline for Stand Out Wiki (standoutwiki.org)
 * Follows Web Launch Checklist standard: https://github.com/cliffhuang6-cmd/web-launch-checklist
 *
 * Capabilities:
 * 1. Dynamic URL Extraction: Reads all canonical URLs directly from dist/sitemap-0.xml.
 * 2. Incremental Submission: Tracks submitted URLs in .indexnow-history.json to avoid duplicate submissions.
 * 3. Exponential Backoff Retry: 3 automated retry attempts with backoff on network failures.
 * 4. Strict Safety Guard: Dormant until SITE_INDEXNOW_ENABLED=true and --submit flag are provided.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const HOST = 'standoutwiki.org';
const KEY = '9e3bf17482a5490bb59e51cfa82d7031';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const HISTORY_FILE = path.join(projectRoot, '.indexnow-history.json');

/**
 * Extract all canonical URLs from built sitemap or dist directory
 */
function discoverUrls() {
  const sitemapPath = path.join(projectRoot, 'dist', 'sitemap-0.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    if (locMatches.length > 0) {
      return [...new Set(locMatches)];
    }
  }

  // Fallback: discover HTML files in dist/
  const distPath = path.join(projectRoot, 'dist');
  if (fs.existsSync(distPath)) {
    const urls = [];
    function scan(dir, baseRoute = '') {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          scan(path.join(dir, entry.name), `${baseRoute}/${entry.name}`);
        } else if (entry.name === 'index.html') {
          urls.push(`https://${HOST}${baseRoute}/`);
        }
      }
    }
    scan(distPath);
    return [...new Set(urls)];
  }

  return [];
}

/**
 * Load incremental history
 */
function loadHistory() {
  if (fs.existsSync(HISTORY_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
    } catch {
      return {};
    }
  }
  return {};
}

/**
 * Save incremental history
 */
function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf8');
}

/**
 * Perform POST request with exponential retry
 */
async function postWithRetry(payload, maxRetries = 3) {
  let attempt = 0;
  let delay = 1000;

  while (attempt < maxRetries) {
    attempt++;
    try {
      console.log(`[IndexNow] Attempt ${attempt}/${maxRetries} sending ${payload.urlList.length} URLs...`);
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        return { success: true, status: response.status, statusText: response.statusText };
      }

      console.warn(`[IndexNow] Attempt ${attempt} returned HTTP ${response.status}: ${response.statusText}`);
      if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        // Client errors (except rate limit) shouldn't be retried
        return { success: false, status: response.status, statusText: response.statusText };
      }
    } catch (err) {
      console.warn(`[IndexNow] Attempt ${attempt} network error: ${err.message}`);
    }

    if (attempt < maxRetries) {
      console.log(`[IndexNow] Waiting ${delay}ms before next retry...`);
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }

  return { success: false, status: 0, statusText: 'Max retries exhausted' };
}

async function main() {
  const args = process.argv.slice(2);
  const isSubmitRequested = args.includes('--submit');
  const isForceAll = args.includes('--force');
  const isDryRun = args.includes('--dry-run');
  const isEnabled = process.env.SITE_INDEXNOW_ENABLED === 'true';

  console.log('=== Stand Out Wiki IndexNow Pipeline ===');
  console.log(`Host: ${HOST}`);
  console.log(`Key: ${KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);

  const discoveredUrls = discoverUrls();
  console.log(`Discovered Canonical URLs: ${discoveredUrls.length}`);

  const history = loadHistory();
  const previouslySubmittedCount = Object.keys(history).length;
  console.log(`Previously Submitted URLs in History: ${previouslySubmittedCount}`);

  // Determine delta URLs
  const pendingUrls = isForceAll
    ? discoveredUrls
    : discoveredUrls.filter(url => !history[url]);

  console.log(`Pending / Delta URLs to Submit: ${pendingUrls.length}`);

  if (isDryRun) {
    console.log('\n[DRY RUN PREVIEW]');
    pendingUrls.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
    return;
  }

  if (!isSubmitRequested || !isEnabled) {
    console.log('\n[SAFETY LATCH ACTIVE]');
    console.log('IndexNow submissions are currently dormant (Site is under strict noindex pre-launch status).');
    console.log('To activate once production search indexing is formally approved:');
    console.log('  1. Remove noindex from public/_headers & Layout.astro');
    console.log('  2. Verify https://standoutwiki.org/' + KEY + '.txt is reachable');
    console.log('  3. Run: SITE_INDEXNOW_ENABLED=true node scripts/indexnow.mjs --submit');
    return;
  }

  if (pendingUrls.length === 0) {
    console.log('\nAll discovered URLs have already been submitted. Use --force to re-submit all.');
    return;
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: pendingUrls
  };

  const result = await postWithRetry(payload);
  if (result.success) {
    console.log(`\n[SUCCESS] Successfully submitted ${pendingUrls.length} URLs to IndexNow (HTTP ${result.status}).`);
    const now = new Date().toISOString();
    for (const url of pendingUrls) {
      history[url] = { lastSubmitted: now, status: result.status };
    }
    saveHistory(history);
  } else {
    console.error(`\n[FAILED] IndexNow submission failed (HTTP ${result.status}: ${result.statusText}).`);
    process.exitCode = 1;
  }
}

main();
