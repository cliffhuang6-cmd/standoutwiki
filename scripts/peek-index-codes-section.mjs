import fs from 'node:fs';

const idx = fs.readFileSync('src/pages/index.astro', 'utf8');
console.log(idx.split('\n').slice(210, 270).join('\n'));
