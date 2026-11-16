import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('=== Stand Out Wiki Production Build Config Verification ===\n');

let errors = 0;

// 1. Verify astro.config.mjs domain
const astroConfigPath = path.join(rootDir, 'astro.config.mjs');
const astroConfig = fs.readFileSync(astroConfigPath, 'utf-8');
if (!astroConfig.includes("site: 'https://standoutwiki.org'")) {
  console.error("❌ Error: astro.config.mjs site URL must be exactly 'https://standoutwiki.org'!");
  errors++;
} else {
  console.log("✓ Verified astro.config.mjs site: 'https://standoutwiki.org'");
}

// 2. Verify robots.txt sitemap
const robotsPath = path.join(rootDir, 'public', 'robots.txt');
const robots = fs.readFileSync(robotsPath, 'utf-8');
if (!robots.includes('Sitemap: https://standoutwiki.org/sitemap.xml')) {
  console.error('❌ Error: public/robots.txt must point to https://standoutwiki.org/sitemap.xml!');
  errors++;
} else {
  console.log('✓ Verified public/robots.txt points to official sitemap');
}

// 3. Verify siteConfig domain
const siteConfigPath = path.join(rootDir, 'src', 'data', 'site.ts');
const siteConfig = fs.readFileSync(siteConfigPath, 'utf-8');
if (!siteConfig.includes("url: 'https://standoutwiki.org'") || !siteConfig.includes("domain: 'standoutwiki.org'")) {
  console.error('❌ Error: src/data/site.ts must declare standoutwiki.org!');
  errors++;
} else {
  console.log('✓ Verified src/data/site.ts domain configuration');
}

if (errors > 0) {
  console.error('\n❌ Build configuration check failed!');
  process.exit(1);
} else {
  console.log('\n✅ Build configuration verified cleanly!');
  process.exit(0);
}
