import fs from 'node:fs';

const analysis = JSON.parse(fs.readFileSync('scripts/stands-analysis.json', 'utf8'));
let emptyCount = 0;
let nonEmptyCount = 0;

for (const [slug, item] of Object.entries(analysis)) {
  const empties = item.sections.filter(s => s.bodyLen === 0);
  emptyCount += empties.length;
  nonEmptyCount += item.sections.length - empties.length;
  if (empties.length > 0) {
    console.log(`${slug}: ${empties.length} empty headers (e.g. ${empties.map(e => e.header).join(', ')})`);
  }
}

console.log(`Total empty headers: ${emptyCount}, non-empty: ${nonEmptyCount}`);
