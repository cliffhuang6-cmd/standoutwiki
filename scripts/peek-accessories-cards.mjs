import fs from 'node:fs';

const acc = fs.readFileSync('src/pages/accessories.astro', 'utf8');
console.log(acc.split('\n').slice(30, 90).join('\n'));
