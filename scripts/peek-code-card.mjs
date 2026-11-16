import fs from 'node:fs';

const cc = fs.readFileSync('src/components/CodeCard.tsx', 'utf8');
console.log('CodeCard.tsx length:', cc.length);
console.log(cc);
