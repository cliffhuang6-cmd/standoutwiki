import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const sampleNames = ['Star Platinum', 'The World', 'Yellow Temperance', 'Kraft Work', 'Cinderella', 'Rolling Stones', 'King Crimson'];

for (const card of data.cards) {
  for (const name of sampleNames) {
    if (card.name.toLowerCase().startsWith(name.toLowerCase())) {
      console.log(`=== CARD: ${card.name} (id: ${card.id}) ===`);
      console.log(card.desc.slice(0, 1500));
      console.log('\n----------------------------------------\n');
      break;
    }
  }
}
