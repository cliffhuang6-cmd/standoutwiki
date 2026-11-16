import fs from 'fs';

const trello = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

const candidateNames = ['Cat Size', 'Tower Of Gray', 'Kiss', 'Sticky Fingers', 'King Crimson (Doppio Moveset)', 'Whitesnake', 'Anubis'];

candidateNames.forEach(name => {
  const card = trello.cards.find(c => c.name.toLowerCase().includes(name.toLowerCase()));
  if (card) {
    console.log(`\n=== Card: ${card.name} ===`);
    console.log('List ID:', card.idList);
    console.log('Desc preview:', card.desc.substring(0, 300));
  }
});
