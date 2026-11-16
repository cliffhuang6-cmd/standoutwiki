import fs from 'node:fs';

const officialBoard = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const releaseBoard = JSON.parse(fs.readFileSync('research/raw_trello/release_VDzjwDz2.json', 'utf8'));

// Build lookup maps
const cardsByName = new Map();
for (const card of [...releaseBoard.cards, ...officialBoard.cards]) {
  if (card.desc && card.desc.length > 200) {
    const key = card.name.toLowerCase().trim();
    if (!cardsByName.has(key)) {
      cardsByName.set(key, card);
    }
  }
}

console.log(`Indexed ${cardsByName.size} cards with substantial descriptions.`);
