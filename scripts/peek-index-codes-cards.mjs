import fs from 'node:fs';

const idx = fs.readFileSync('src/pages/index.astro', 'utf8');
console.log(idx.split('\n').slice(90, 160).join('\n'));
