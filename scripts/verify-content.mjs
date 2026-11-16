import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('=== Stand Out Wiki Content & Integrity Verification ===\n');

let errors = 0;
let warnings = 0;

// 1. Check Stands
const standsPath = path.join(rootDir, 'src', 'data', 'stands.ts');
if (!fs.existsSync(standsPath)) {
  console.error('❌ Error: src/data/stands.ts not found!');
  errors++;
} else {
  const fileContent = fs.readFileSync(standsPath, 'utf-8');
  const prefix = 'export const stands: Stand[] =';
  const prefixIdx = fileContent.indexOf(prefix);
  const startIdx = fileContent.indexOf('[', prefixIdx > -1 ? (prefixIdx + prefix.length) : 0);
  const slugIdx = fileContent.indexOf('export const standsBySlug');
  const endIdx = slugIdx > -1 ? fileContent.lastIndexOf(']', slugIdx) : fileContent.lastIndexOf(']');
  if (startIdx === -1 || endIdx === -1) {
    console.error('❌ Error: Failed to find JSON array in src/data/stands.ts');
    errors++;
  } else {
    try {
      const jsonStr = fileContent.substring(startIdx, endIdx + 1);
      const stands = JSON.parse(jsonStr);
      console.log(`✓ Loaded ${stands.length} Stands from stands.ts`);

      const slugs = new Set();
      stands.forEach((s, idx) => {
        // Check required fields
        if (!s.slug || !s.name || !s.rarity || !s.tier || !s.lore || !s.moveset) {
          console.error(`❌ Stand at index ${idx} missing essential fields! Name: ${s.name}`);
          errors++;
        }
        // Check duplicate slug
        if (slugs.has(s.slug)) {
          console.error(`❌ Duplicate Stand slug detected: "${s.slug}"`);
          errors++;
        }
        slugs.add(s.slug);

        // Check image exists locally
        if (s.image) {
          const localImagePath = path.join(rootDir, 'public', s.image.replace(/^\//, ''));
          if (!fs.existsSync(localImagePath)) {
            console.warn(`⚠️ Warning: Image file not found for ${s.name}: ${s.image}`);
            warnings++;
          }
        }

        // Check moveset count
        if (!Array.isArray(s.moveset) || s.moveset.length === 0) {
          console.error(`❌ Stand "${s.name}" has an empty moveset!`);
          errors++;
        }
      });
    } catch (e) {
      console.error('❌ Error parsing JSON from src/data/stands.ts:', e.message);
      errors++;
    }
  }
}

// 2. Check Competitor Brands in Production Data
const dataFiles = ['stands.ts', 'codes.ts', 'items.ts', 'accessories.ts', 'guides.ts', 'quests.ts', 'site.ts'];
const forbiddenStrings = ['standout.wiki', 'stand-out.site', 'roblox-standout.wiki'];

dataFiles.forEach((f) => {
  const filePath = path.join(rootDir, 'src', 'data', f);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8').toLowerCase();
    forbiddenStrings.forEach((forbidden) => {
      if (content.includes(forbidden)) {
        console.error(`❌ Forbidden competitor brand "${forbidden}" detected in src/data/${f}!`);
        errors++;
      }
    });
  }
});

// 3. Check Brand Assets
const brandAssets = [
  'images/brand/stand-out-wiki-logo.webp',
  'images/brand/stand-out-wiki-logo.png',
  'images/brand/stand-out-wiki-icon.png',
  'favicon.ico',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'og-image.png',
  'site.webmanifest',
  'robots.txt'
];

brandAssets.forEach((asset) => {
  const assetPath = path.join(rootDir, 'public', asset);
  if (!fs.existsSync(assetPath)) {
    console.error(`❌ Missing critical brand asset: public/${asset}`);
    errors++;
  } else {
    const stat = fs.statSync(assetPath);
    if (stat.size === 0) {
      console.error(`❌ Brand asset is 0 bytes: public/${asset}`);
      errors++;
    }
  }
});

// Summary
console.log('\n--- Verification Summary ---');
console.log(`Total Errors: ${errors}`);
console.log(`Total Warnings: ${warnings}`);

if (errors > 0) {
  console.error('\n❌ Content verification failed! Please address the errors above.');
  process.exit(1);
} else {
  console.log('\n✅ All content and asset integrity checks passed cleanly!');
  process.exit(0);
}
