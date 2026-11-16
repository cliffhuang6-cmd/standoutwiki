import fs from 'node:fs';

const standsTs = fs.readFileSync('src/data/stands.ts', 'utf8');
const testSlugs = ['lyin-eyes', 'the-mattekudasai', 'the-hustle', 'november-rain', 'big-mouth-strikes-again', 'jojosapiens'];

for (const s of testSlugs) {
  const idx = standsTs.indexOf(`"slug": "${s}"`);
  if (idx !== -1) {
    const endIdx = standsTs.indexOf('    "verifiedDate"', idx);
    console.log(`=== ${s} in stands.ts ===`);
    console.log(standsTs.slice(idx, endIdx + 40));
  }
}
