import fs from 'node:fs';

const guidesTs = fs.readFileSync('src/data/guides.ts', 'utf8');
console.log('guides.ts length:', guidesTs.length);

const guidePage = fs.readFileSync('src/pages/guides/[slug].astro', 'utf8');
console.log('guides/[slug].astro length:', guidePage.length);
console.log('\n--- guides/[slug].astro content preview: ---');
console.log(guidePage.slice(0, 1500));
