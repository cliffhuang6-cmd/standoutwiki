import fs from 'node:fs';

const standsTs = fs.readFileSync('src/data/stands.ts', 'utf8');
console.log('Stands TS length:', standsTs.length);

// Inspect Yellow Temperance in stands.ts
const ytIndex = standsTs.indexOf("slug: 'yellow-temperance'");
if (ytIndex !== -1) {
  console.log(standsTs.slice(ytIndex - 50, ytIndex + 1200));
}
