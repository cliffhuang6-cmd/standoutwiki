import fs from 'node:fs';

const officialBoard = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const rokaList = officialBoard.cards.filter(c => c.idList === '6acaafc460f87ef3d4b2713b');

console.log(`Found ${rokaList.length} cards in Rokaka Mutations list:`);
for (const c of rokaList) {
  console.log(`- ${c.name}: ${c.desc.slice(0, 100).replace(/\n/g, ' ')}`);
}
