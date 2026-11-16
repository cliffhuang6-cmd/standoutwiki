import fs from 'node:fs';

const txt = fs.readFileSync('C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/types/index.ts', 'utf8');
const match = txt.match(/export interface RokakakaMutation[\s\S]*?\}/);
console.log(match ? match[0] : 'None');
