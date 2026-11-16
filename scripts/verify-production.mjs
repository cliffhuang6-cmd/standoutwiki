import https from 'https';

const baseUrl = 'https://standoutwiki.org';

function fetchUrl(path) {
  return new Promise((resolve) => {
    const url = new URL(`${baseUrl}${path}`);
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', (err) => {
      resolve({ status: 500, error: err.message });
    });
  });
}

async function main() {
  console.log('=== Production Verification for https://standoutwiki.org ===\n');

  // 1. Check Homepage
  console.log('1. Checking Homepage HTML and Meta...');
  const home = await fetchUrl('/');
  console.log('Homepage status:', home.status);
  console.log('Has noindex, follow:', home.body?.includes('content="noindex, follow"'));
  console.log('Has canonical URL:', home.body?.includes('rel="canonical" href="https://standoutwiki.org/"'));
  console.log('Has stylesheet:', home.body?.includes('rel="stylesheet" href="/styles/global.css"'));
  console.log('Has GA4 (G-P9Q9F4LS71):', home.body?.includes('G-P9Q9F4LS71'));
  console.log('Has Clarity (zee7d2kwl5):', home.body?.includes('zee7d2kwl5'));
  console.log('Has Logo:', home.body?.includes('/images/brand/stand-out-wiki-logo.webp'));

  // 2. Check CSS Stylesheet
  console.log('\n2. Checking CSS Stylesheet...');
  const css = await fetchUrl('/styles/global.css');
  console.log('CSS status:', css.status, 'Length:', css.body?.length);

  // 3. Check robots.txt
  console.log('\n3. Checking robots.txt...');
  const robots = await fetchUrl('/robots.txt');
  console.log('robots.txt status:', robots.status, 'Body:\n', robots.body?.trim());

  // 4. Check sitemap.xml
  console.log('\n4. Checking sitemap.xml...');
  const sitemap = await fetchUrl('/sitemap.xml');
  console.log('sitemap.xml status:', sitemap.status, 'Length:', sitemap.body?.length);

  // 5. Check sample media
  console.log('\n5. Checking sample media...');
  const logo = await fetchUrl('/images/brand/stand-out-wiki-logo.webp');
  console.log('Brand logo status:', logo.status, 'Length:', logo.body?.length);
  const standImg = await fetchUrl('/images/stands/star-platinum.webp');
  console.log('Star Platinum image status:', standImg.status, 'Length:', standImg.body?.length);
  const rokaImg = await fetchUrl('/images/rokakaka/emerald-roka.webp');
  console.log('Emerald Roka image status:', rokaImg.status, 'Length:', rokaImg.body?.length);

  // 6. Check critical hub routes
  const routes = [
    '/codes/',
    '/tier-list/',
    '/stand-rarity/',
    '/stand-arrows/',
    '/stands/',
    '/stands/star-platinum/',
    '/stands/the-world/',
    '/stands/mandom/',
    '/rokakaka/',
    '/gardening/',
    '/sub-abilities/',
    '/hamon/',
    '/vampire/',
    '/items/',
    '/accessories/',
    '/stand-storage/',
    '/quests/',
    '/updates/',
    '/guides/',
    '/guides/level-up-fast/',
    '/guides/star-platinum/',
    '/faq/',
    '/contact/',
    '/about/',
    '/privacy/',
    '/terms/'
  ];

  console.log('\n6. Checking sample routes for HTTP 200 and noindex...');
  for (const r of routes) {
    const res = await fetchUrl(r);
    const hasNoIndex = res.body?.includes('content="noindex, follow"');
    console.log(`  ${r.padEnd(28)} Status: ${res.status} | noindex: ${hasNoIndex ? '✅ PASS' : '❌ FAIL'}`);
  }
}

main().catch(console.error);
