import fs from 'node:fs';

const codesPage = fs.readFileSync('src/pages/codes.astro', 'utf8');
console.log('codes.astro length:', codesPage.length);
console.log(codesPage.slice(0, 1500));
