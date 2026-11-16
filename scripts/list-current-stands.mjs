import fs from 'fs';

const standsContent = fs.readFileSync('src/data/stands.ts', 'utf8');
const stands = [...standsContent.matchAll(/"slug":\s*"([^"]+)",\s*"name":\s*"([^"]+)"/g)].map(m => ({ slug: m[1], name: m[2] }));

console.log('Total stands:', stands.length);
stands.forEach((s, i) => console.log(`${i + 1}. ${s.name} (${s.slug})`));
