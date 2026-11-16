import fs from 'fs';

const trello = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const catCard = trello.cards.find(c => c.name.toLowerCase() === 'cat size');

if (catCard) {
  console.log('Cat Size Full Desc:\n', catCard.desc);
}
