import fs from 'node:fs';

const txt = fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/data/items.ts', 'utf8');
const matches = [...txt.matchAll(/"category":\s*"([^"]+)"/g)].map(x => x[1]);
const summary = {};
for (const c of matches) summary[c] = (summary[c] || 0) + 1;
console.log('Item category distribution:', summary);
