import fs from 'node:fs';

const acc = fs.readFileSync('src/pages/accessories.astro', 'utf8');
console.log('accessories.astro length:', acc.length);
console.log(acc.slice(0, 1500));
