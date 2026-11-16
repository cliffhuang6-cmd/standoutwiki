import fs from 'node:fs';

const standsTs = fs.readFileSync('src/data/stands.ts', 'utf8');
const testSlugs = ['yellow-temperance', 'kraft-work', 'star-platinum', 'king-crimson', 'the-hustle'];

for (const s of testSlugs) {
  const idx = standsTs.indexOf(`"slug": "${s}"`);
  const endIdx = standsTs.indexOf('    "verifiedDate"', idx);
  console.log(`\n================== ${s} ==================`);
  console.log(standsTs.slice(idx, endIdx + 30));
}
