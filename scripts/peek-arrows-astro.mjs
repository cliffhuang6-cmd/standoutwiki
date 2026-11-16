import fs from 'node:fs';

const arrowsAstro = fs.readFileSync('src/pages/stand-arrows.astro', 'utf8');
console.log('stand-arrows.astro length:', arrowsAstro.length);
const cardIdx = arrowsAstro.indexOf('<div class="flex items-center gap-4');
if (cardIdx !== -1) {
  console.log(arrowsAstro.slice(cardIdx - 100, cardIdx + 800));
} else {
  console.log(arrowsAstro.slice(0, 1500));
}
