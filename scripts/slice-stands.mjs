import fs from 'node:fs';
const text = fs.readFileSync('src/data/stands.ts', 'utf8');
console.log(text.slice(0, 2000));
