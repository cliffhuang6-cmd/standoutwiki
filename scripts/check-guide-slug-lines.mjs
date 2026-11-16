import fs from 'node:fs';

const page = fs.readFileSync('src/pages/guides/[slug].astro', 'utf8');
console.log('Total lines in guides/[slug].astro:', page.split('\n').length);
console.log('Lines 180 to 260:');
console.log(page.split('\n').slice(180, 260).join('\n'));
