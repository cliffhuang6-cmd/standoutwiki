import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Copy sitemap-index.xml to sitemap.xml so both URLs resolve identically
const sitemapIndex = path.join(distDir, 'sitemap-index.xml');
const sitemapTarget = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemapIndex)) {
  fs.copyFileSync(sitemapIndex, sitemapTarget);
  console.log('✓ Successfully mirrored sitemap-index.xml to dist/sitemap.xml');
} else {
  console.warn('⚠️ Warning: dist/sitemap-index.xml not found during postbuild.');
}

// Ensure _headers exists in dist/ for Cloudflare Pages HTTP header configuration
const headersSrc = path.join(rootDir, 'public', '_headers');
const headersTarget = path.join(distDir, '_headers');
if (fs.existsSync(headersSrc)) {
  fs.copyFileSync(headersSrc, headersTarget);
  console.log('✓ Verified dist/_headers for Cloudflare Pages');
}
