import fs from 'node:fs';

const site = fs.readFileSync('src/data/site.ts', 'utf8');
console.log(site.slice(0, 1500));
console.log(site.slice(site.length - 1500));
