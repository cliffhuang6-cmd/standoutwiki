import fs from 'node:fs';

const rm = fs.readFileSync('src/components/RokaMixer.tsx', 'utf8');
console.log('RokaMixer.tsx length:', rm.length);
console.log(rm.slice(0, 1500));
