import fs from 'node:fs';

const rokaAstro = fs.readFileSync('src/pages/rokakaka.astro', 'utf8');
console.log('rokakaka.astro length:', rokaAstro.length);
console.log(rokaAstro.slice(0, 1500));
