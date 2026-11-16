import fs from 'fs';
import path from 'path';

const distDir = 'dist';
const files = [];

function scan(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      scan(full);
    } else if (item.name.endsWith('.html')) {
      files.push(full);
    }
  }
}

scan(distDir);

const pagesWithBadge = [];
const pagesWithoutBadge = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('openhunts.com')) {
    pagesWithBadge.push(file);
  } else {
    pagesWithoutBadge.push(file);
  }
}

console.log('=== OPENHUNTS BADGE VERIFICATION ===');
console.log(`Total HTML files: ${files.length}`);
console.log(`Pages with OpenHunts badge: ${pagesWithBadge.length}`);
console.log(`Files with badge:`, pagesWithBadge);
console.log(`Pages without OpenHunts badge: ${pagesWithoutBadge.length}`);
