import fs from 'node:fs';

const txt = fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/data/rokakaka.ts', 'utf8');
const names = [...txt.matchAll(/"name":\s*"([^"]+)"/g)].map(x => x[1]);
names.forEach((n, i) => console.log(`${i + 1}. ${n}`));
