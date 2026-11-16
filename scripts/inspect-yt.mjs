import fs from 'node:fs';

const standsTs = fs.readFileSync('src/data/stands.ts', 'utf8');
const yt = JSON.parse(standsTs.slice(standsTs.indexOf('[\n  {'), standsTs.indexOf('\n  },\n  {') + 4));
console.log(JSON.stringify(yt, null, 2));
