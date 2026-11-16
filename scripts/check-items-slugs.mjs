import fs from 'node:fs';

const itemsTs = fs.readFileSync('src/data/items.ts', 'utf8');
console.log('items.ts length:', itemsTs.length);
const matches = itemsTs.match(/"slug":\s*"([^"]+)"/g);
console.log('Slugs in items.ts:', matches);
