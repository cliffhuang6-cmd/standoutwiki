import fs from 'node:fs';

const types = fs.readFileSync('src/types/index.ts', 'utf8');
const codeIdx = types.indexOf('export interface Code');
console.log(types.slice(codeIdx, codeIdx + 400));
