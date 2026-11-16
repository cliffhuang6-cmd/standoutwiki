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

let indexFollowCount = 0;
let noindexCount = 0;
const noindexFiles = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('content="index, follow"')) {
    indexFollowCount++;
  } else if (content.includes('content="noindex')) {
    noindexCount++;
    noindexFiles.push(file);
  }
}

console.log('=== BUILD OUTPUT INDEXING SCAN ===');
console.log(`Total HTML files built: ${files.length}`);
console.log(`Pages with "index, follow": ${indexFollowCount}`);
console.log(`Pages with "noindex": ${noindexCount}`);
console.log(`Noindex file list:`, noindexFiles);

const headersContent = fs.readFileSync('dist/_headers', 'utf8');
console.log('\n=== DIST/_HEADERS SCAN ===');
console.log('Root /* contains noindex:', headersContent.split('https://')[0].includes('X-Robots-Tag: noindex'));
console.log('Contains pages.dev rules:', headersContent.includes('https://:project.pages.dev/*'));
