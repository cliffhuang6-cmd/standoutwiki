import fs from 'node:fs';

const officialBoard = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const releaseBoard = JSON.parse(fs.readFileSync('research/raw_trello/release_VDzjwDz2.json', 'utf8'));

// 1. Search for Level, Stat, Attribute, Strength, Ability, Damage in cards
console.log('=== SEARCHING FOR LEVEL / STAT / ATTRIBUTE INFO ===');
for (const card of [...officialBoard.cards, ...releaseBoard.cards]) {
  const text = (card.name + ' ' + card.desc).toLowerCase();
  if (text.includes('level') || text.includes('stat point') || text.includes('strength') || text.includes('max level') || text.includes('ability scaling')) {
    if (card.desc.length > 50 && (text.includes('cap') || text.includes('points') || text.includes('health') || text.includes('strength'))) {
      console.log(`Card: "${card.name}" (list: ${card.idList})`);
      console.log(card.desc.slice(0, 300));
      console.log('---');
    }
  }
}
