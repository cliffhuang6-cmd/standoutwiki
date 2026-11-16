import fs from 'node:fs';

const filePath = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/data/stands.ts';
const content = fs.readFileSync(filePath, 'utf8');

const regex = /"points":\s*\{\s*"health":\s*(\d+),\s*"damage":\s*(\d+),\s*"ability":\s*(\d+)\s*\}/g;
let match;
let count = 0;
let errors = 0;

while ((match = regex.exec(content)) !== null) {
  count++;
  const h = parseInt(match[1]);
  const d = parseInt(match[2]);
  const a = parseInt(match[3]);
  const sum = h + d + a;
  if (sum !== 150) {
    console.error(`Mismatch found: H=${h}, D=${d}, A=${a}, sum=${sum}`);
    errors++;
  }
}

console.log(`Checked ${count} stands: ${errors} errors (all sum to 150).`);
