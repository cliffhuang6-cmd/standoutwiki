import fs from 'node:fs';

const itemsAstro = fs.readFileSync('src/pages/items.astro', 'utf8');
console.log('items.astro length:', itemsAstro.length);
console.log(itemsAstro.slice(0, 1500));
console.log('Card template slice:');
const cardIdx = itemsAstro.indexOf('<div class="grid');
console.log(itemsAstro.slice(cardIdx, cardIdx + 1500));
