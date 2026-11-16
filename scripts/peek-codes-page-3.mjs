import fs from 'node:fs';

const codesPage = fs.readFileSync('src/pages/codes.astro', 'utf8');
console.log(codesPage.split('\n').slice(120, 200).join('\n'));
