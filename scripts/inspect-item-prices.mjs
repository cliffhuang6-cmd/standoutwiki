import fs from 'node:fs';

const txt = fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/data/items.ts', 'utf8');
const items = [...txt.matchAll(/"slug":\s*"([^"]+)",[\s\S]*?"name":\s*"([^"]+)",[\s\S]*?"sellPrice":\s*"([^"]+)"/g)];
for (const it of items) {
  console.log(`${it[1]} (${it[2]}): ${it[3]}`);
}
