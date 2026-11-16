import fs from 'node:fs';

const guidesTs = fs.readFileSync('src/data/guides.ts', 'utf8');
console.log(guidesTs.slice(0, 2000));
