import fs from 'node:fs';

const codesPage = fs.readFileSync('src/pages/codes.astro', 'utf8');
console.log(codesPage.split('\n').slice(35, 120).join('\n'));
