import fs from 'node:fs';

const idx = fs.readFileSync('src/pages/index.astro', 'utf8');
console.log(idx.split('\n').slice(35, 90).join('\n'));
