import fs from 'node:fs';

const txt = fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/data/rokakaka.ts', 'utf8');
const lines = txt.split('\n');
lines.forEach((l, i) => {
  if (l.includes('peridot')) {
    console.log(lines.slice(i - 1, i + 10).join('\n'));
  }
});
