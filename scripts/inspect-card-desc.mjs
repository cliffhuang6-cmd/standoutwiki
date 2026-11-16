import fs from 'fs';

const trello = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

const card = trello.cards.find(c => c.name.toLowerCase() === 'yellow temperance');
if (card) {
  console.log('=== Card: Yellow Temperance ===');
  console.log(card.desc);
}
