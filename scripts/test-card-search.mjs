import fs from 'node:fs';

const officialBoard = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const releaseBoard = JSON.parse(fs.readFileSync('research/raw_trello/release_VDzjwDz2.json', 'utf8'));

// Combine cards from both boards, preferring releaseBoard for the 6 testing/new stands
const allCards = [...officialBoard.cards, ...releaseBoard.cards];

function findCard(query, preferredBoard = 'any') {
  const q = query.toLowerCase();
  const searchCards = preferredBoard === 'release' 
    ? [...releaseBoard.cards, ...officialBoard.cards]
    : [...officialBoard.cards, ...releaseBoard.cards];
    
  for (const c of searchCards) {
    if (c.name.toLowerCase() === q && c.desc.length > 200) {
      return c;
    }
  }
  for (const c of searchCards) {
    if (c.name.toLowerCase().startsWith(q) && c.desc.length > 200) {
      return c;
    }
  }
  return null;
}

const sampleStands = ['Lyin\' Eyes', 'November Rain', 'The MATTEKUDASAI', 'The Hustle', 'Big Mouth Strikes Again', 'Jojosapiens', 'Star Platinum', 'Yellow Temperance'];

for (const name of sampleStands) {
  const card = findCard(name, 'release');
  console.log(`Stand: ${name} -> Found card: "${card ? card.name : 'NONE'}" (desc length: ${card ? card.desc.length : 0})`);
}
