import fs from 'fs';

const content = fs.readFileSync('src/data/guides.ts', 'utf8');
const prefix = 'export const guides: Guide[] =';
const pIdx = content.indexOf(prefix);
const startIdx = content.indexOf('[', pIdx + prefix.length);
const endIdx = content.indexOf('export const guidesBySlug');
const guides = JSON.parse(content.substring(startIdx, content.lastIndexOf(']', endIdx) + 1));

console.log('Total guides:', guides.length);
guides.forEach((g, i) => {
  const titles = g.sections.map(s => s.title);
  console.log(`\n${i + 1}. [${g.slug}] "${g.title}"`);
  console.log('   Sections:', titles);
});
