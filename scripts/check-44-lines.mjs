import fs from 'node:fs';

const idx = fs.readFileSync('src/pages/index.astro', 'utf8');
const lines = idx.split('\n');
lines.forEach((l, i) => {
  if (l.includes('44')) {
    console.log(`index.astro:${i+1}: ${l}`);
  }
});

const standsIdx = fs.readFileSync('src/pages/stands/index.astro', 'utf8');
const lines2 = standsIdx.split('\n');
lines2.forEach((l, i) => {
  if (l.includes('44')) {
    console.log(`stands/index.astro:${i+1}: ${l}`);
  }
});
