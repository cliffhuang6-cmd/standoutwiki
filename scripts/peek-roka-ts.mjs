import fs from 'node:fs';

const txt = fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/data/rokakaka.ts', 'utf8');
console.log(txt.slice(0, 800));
console.log('\n--- Bottom ---');
console.log(txt.slice(-400));
