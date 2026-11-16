import https from 'https';
import http from 'http';

function testUrl(urlStr, options = {}) {
  return new Promise((resolve) => {
    try {
      const url = new URL(urlStr);
      const isHttps = url.protocol === 'https:';
      const client = isHttps ? https : http;

      const req = client.request(urlStr, {
        method: options.method || 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
          ...(options.headers || {})
        }
      }, (res) => {
        let body = '';
        res.on('data', chunk => {
          if (body.length < 50000) body += chunk;
        });
        res.on('end', () => {
          const xRobots = res.headers['x-robots-tag'];
          const location = res.headers['location'];
          const metaRobotsMatch = body.match(/<meta[^>]+name=["']robots["'][^>]*>/i);
          const metaRobots = metaRobotsMatch ? metaRobotsMatch[0] : null;
          const canonicalMatch = body.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
          const canonical = canonicalMatch ? canonicalMatch[1] : null;

          resolve({
            url: urlStr,
            status: res.statusCode,
            location: location || null,
            xRobotsTag: xRobots || null,
            metaRobots: metaRobots,
            canonical: canonical,
            contentLength: body.length
          });
        });
      });

      req.on('error', (err) => {
        resolve({ url: urlStr, error: err.message });
      });
      req.setTimeout(10000, () => {
        req.destroy();
        resolve({ url: urlStr, error: 'Timeout' });
      });
      req.end();
    } catch (e) {
      resolve({ url: urlStr, error: e.message });
    }
  });
}

async function main() {
  console.log('=== REAL HTTP VERIFICATION ON PRODUCTION ===\n');

  // 1. Core pages
  const coreUrls = [
    'https://standoutwiki.org/',
    'https://standoutwiki.org/stands/',
    'https://standoutwiki.org/codes/',
    'https://standoutwiki.org/tier-list/',
    'https://standoutwiki.org/items/',
    'https://standoutwiki.org/guides/',
    'https://standoutwiki.org/stands/star-platinum/',
    'https://standoutwiki.org/stands/the-world/',
    'https://standoutwiki.org/stands/king-crimson/',
    'https://standoutwiki.org/stands/november-rain/',
    'https://standoutwiki.org/stands/soft-and-wet/',
    'https://standoutwiki.org/guides/level-up-fast/',
    'https://standoutwiki.org/guides/lucky-arrows/',
    'https://standoutwiki.org/guides/hamon/',
    'https://standoutwiki.org/guides/crafting/',
    'https://standoutwiki.org/guides/first-stand/'
  ];

  console.log('--- Testing Core Pages on standoutwiki.org ---');
  for (const url of coreUrls) {
    const res = await testUrl(url);
    console.log(`[${res.status}] ${url}`);
    console.log(`    X-Robots-Tag: ${res.xRobotsTag || 'NONE (Allowed)'}`);
    console.log(`    Meta Robots:  ${res.metaRobots || 'NONE'}`);
    console.log(`    Canonical:    ${res.canonical}`);
    if (res.xRobotsTag?.includes('noindex') || res.metaRobots?.includes('noindex')) {
      console.error(`    ❌ ERROR: noindex found on ${url}`);
    } else {
      console.log(`    ✓ Clean indexable`);
    }
  }

  // 2. Test pages.dev
  console.log('\n--- Testing pages.dev Protection ---');
  const pagesDevUrls = [
    'https://standoutwiki-6gv.pages.dev/',
    'https://4b081720.standoutwiki-6gv.pages.dev/'
  ];
  for (const url of pagesDevUrls) {
    const res = await testUrl(url);
    console.log(`[${res.status}] ${url}`);
    console.log(`    X-Robots-Tag: ${res.xRobotsTag}`);
    if (res.xRobotsTag?.includes('noindex')) {
      console.log(`    ✓ Protected: X-Robots-Tag has noindex`);
    } else {
      console.warn(`    ⚠️ Warning: noindex header not found on pages.dev`);
    }
  }

  // 3. Test 404 page
  console.log('\n--- Testing 404 Page on standoutwiki.org ---');
  const notFoundRes = await testUrl('https://standoutwiki.org/404-test-nonexistent-page/');
  console.log(`[${notFoundRes.status}] 404 Page`);
  console.log(`    Meta Robots: ${notFoundRes.metaRobots}`);

  // 4. Test Redirects
  console.log('\n--- Testing 301 Redirects ---');
  const redirectUrls = [
    'http://standoutwiki.org/',
    'http://www.standoutwiki.org/',
    'https://www.standoutwiki.org/'
  ];
  for (const url of redirectUrls) {
    const res = await testUrl(url, { method: 'HEAD' });
    console.log(`[${res.status}] ${url} -> ${res.location}`);
  }

  // 5. Test robots.txt and sitemap
  console.log('\n--- Testing robots.txt and sitemap.xml ---');
  const robotsRes = await testUrl('https://standoutwiki.org/robots.txt');
  console.log(`[${robotsRes.status}] robots.txt`);
  const sitemapRes = await testUrl('https://standoutwiki.org/sitemap.xml');
  console.log(`[${sitemapRes.status}] sitemap.xml (Length: ${sitemapRes.contentLength})`);
  const sitemap0Res = await testUrl('https://standoutwiki.org/sitemap-0.xml');
  console.log(`[${sitemap0Res.status}] sitemap-0.xml (Length: ${sitemap0Res.contentLength})`);
}

main().catch(console.error);
