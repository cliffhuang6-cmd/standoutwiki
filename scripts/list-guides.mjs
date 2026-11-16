import fs from 'node:fs';

const guidesTs = fs.readFileSync('src/data/guides.ts', 'utf8');
const slugs = [];
const regex = /slug:\s*'([^']+)'/g;
let m;
while ((m = regex.exec(guidesTs)) !== null) {
  slugs.push(m[1]);
}
console.log(`Found ${slugs.length} guides:`, slugs);
