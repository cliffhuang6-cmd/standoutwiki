import fs from 'node:fs';

const guidePage = fs.readFileSync('src/pages/guides/[slug].astro', 'utf8');
console.log(guidePage.slice(1500, 6000));
