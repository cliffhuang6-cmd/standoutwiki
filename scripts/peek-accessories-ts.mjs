import fs from 'node:fs';

const accTs = fs.readFileSync('src/data/accessories.ts', 'utf8');
console.log('accessories.ts length:', accTs.length);
console.log(accTs.slice(0, 1000));
