import fs from 'node:fs';

const rk = fs.readFileSync('src/data/rokakaka.ts', 'utf8');
console.log('rokakaka.ts length:', rk.length);
console.log(rk.slice(0, 1000));
