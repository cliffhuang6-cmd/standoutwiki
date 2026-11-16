import fs from 'node:fs';

const officialBoard = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const releaseBoard = JSON.parse(fs.readFileSync('research/raw_trello/release_VDzjwDz2.json', 'utf8'));

// Find items in both boards
const itemCards = [];
for (const card of [...officialBoard.cards, ...releaseBoard.cards]) {
  if (card.idList === '6ab43b01bbbc097b9d5ab372' || card.idList === '6af25325efcf475a0337cd57') {
    itemCards.push({ id: card.id, name: card.name, desc: card.desc.slice(0, 150) });
  }
}
console.log(`Found ${itemCards.length} item cards:`);
console.log(itemCards);

// Check existing local image files in public/images/items
const localFiles = fs.readdirSync('public/images/items');
console.log('\nLocal files in public/images/items:', localFiles);
