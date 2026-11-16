import fs from 'node:fs';

const standsTs = fs.readFileSync('src/data/stands.ts', 'utf8');
console.log('First 500 chars:');
console.log(standsTs.slice(0, 500));

const typesTs = fs.readFileSync('src/types/index.ts', 'utf8');
console.log('\nTypes TS:');
console.log(typesTs);
