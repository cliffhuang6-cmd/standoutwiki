import fs from 'fs';

const trello = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

// Load current stands.ts
const standsContent = fs.readFileSync('src/data/stands.ts', 'utf8');
const prefix = 'export const stands: Stand[] =';
const pIdx = standsContent.indexOf(prefix);
const startIdx = standsContent.indexOf('[', pIdx + prefix.length);
const endIdx = standsContent.indexOf('export const standsBySlug');
const currentStands = JSON.parse(standsContent.substring(startIdx, standsContent.lastIndexOf(']', endIdx) + 1));

console.log('Current stands count:', currentStands.length);

// For each stand, match with Trello card
const matched = [];
const unmatched = [];

currentStands.forEach(s => {
  const card = trello.cards.find(c => {
    const cName = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const sName = s.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cName === sName || cName.includes(sName) || sName.includes(cName);
  });
  if (card) {
    matched.push({ name: s.name, cardName: card.name, descLen: card.desc.length });
  } else {
    unmatched.push(s.name);
  }
});

console.log(`Matched: ${matched.length}/${currentStands.length}`);
if (unmatched.length > 0) {
  console.log('Unmatched:', unmatched);
}
