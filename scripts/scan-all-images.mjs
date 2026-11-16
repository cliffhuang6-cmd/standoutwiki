import fs from 'node:fs';
import path from 'node:path';

const projectRoot = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki';
const publicDir = path.join(projectRoot, 'public');

console.log('=== STAND OUT WIKI COMPLETE IMAGE SCAN ===\n');

const imgPattern = /(?:["'\(]|\b(?:src|image|ogImage|href|url)=["']?)(\/(?:images|favicon|apple-touch|site)[^"'\)\s]+\.(?:webp|png|jpg|jpeg|svg|ico))(?:\?[^"'\)\s]*)?["'\)]?/gi;

const referencedImages = new Map(); // path -> list of files

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (/\.(astro|tsx?|jsx?|mjs|json|css|md)$/i.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      let match;
      while ((match = imgPattern.exec(content)) !== null) {
        const imgPath = match[1];
        if (!referencedImages.has(imgPath)) {
          referencedImages.set(imgPath, new Set());
        }
        referencedImages.get(imgPath).add(path.relative(projectRoot, fullPath));
      }
    }
  }
}

scanDirectory(path.join(projectRoot, 'src'));

console.log(`Discovered ${referencedImages.size} unique image references across src/.\n`);

let missingCount = 0;
let validCount = 0;

for (const [imgUrl, sources] of referencedImages.entries()) {
  const localFilePath = path.join(publicDir, imgUrl.replace(/^\//, '').replace(/\//g, path.sep));
  if (!fs.existsSync(localFilePath)) {
    console.error(`❌ MISSING IMAGE: ${imgUrl}`);
    console.error(`   Referenced in: ${[...sources].join(', ')}`);
    console.error(`   Expected at: ${localFilePath}\n`);
    missingCount++;
  } else {
    validCount++;
  }
}

console.log(`\nScan Summary:`);
console.log(`✓ Valid Existing Images: ${validCount}`);
console.log(`❌ Missing Images: ${missingCount}`);

if (missingCount > 0) {
  process.exitCode = 1;
} else {
  console.log(`\n🎉 ALL REFERENCED IMAGES EXIST LOCALLY!`);
}
