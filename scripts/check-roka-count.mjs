import fs from 'node:fs';

const rk = fs.readFileSync('src/data/rokakaka.ts', 'utf8');
const names = [];
const regex = /name:\s*'([^']+)'/g;
let m;
while ((m = regex.exec(rk)) !== null) {
  names.push(m[1]);
}
console.log(`Found ${names.length} mutations in rokakaka.ts:`, names);
