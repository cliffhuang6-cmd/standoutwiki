import https from 'https';
import fs from 'fs';

const sitemapPath = 'dist/sitemap-0.xml';
const content = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = [...content.matchAll(/<loc>(https:\/\/standoutwiki\.org\/[^<]*)<\/loc>/g)];
const urls = locMatches.map(m => m[1]);

console.log(`Found ${urls.length} URLs in sitemap-0.xml to verify on production...`);

function checkUrl(urlStr) {
  return new Promise((resolve) => {
    const url = new URL(urlStr);
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url: urlStr,
          status: res.statusCode,
          hasNoIndex: data.includes('content="noindex, follow"')
        });
      });
    }).on('error', (err) => {
      resolve({ url: urlStr, status: 500, error: err.message, hasNoIndex: false });
    });
  });
}

async function main() {
  let passed = 0;
  let failed = 0;
  const batchSize = 10;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(checkUrl));
    for (const r of results) {
      if (r.status === 200 && r.hasNoIndex) {
        passed++;
      } else {
        console.error(`❌ Issue on ${r.url}: status=${r.status}, noindex=${r.hasNoIndex}`);
        failed++;
      }
    }
  }

  console.log(`\n=== Verification Results ===`);
  console.log(`Total URLs Checked: ${urls.length}`);
  console.log(`Passed (200 OK + noindex): ${passed}`);
  console.log(`Failed: ${failed}`);
}

main().catch(console.error);
