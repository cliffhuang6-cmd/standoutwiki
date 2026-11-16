import fs from 'node:fs';

const itemsTs = fs.readFileSync('src/data/items.ts', 'utf8');
console.log(itemsTs.slice(0, 1000));
