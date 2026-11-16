import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/release_VDzjwDz2.json', 'utf8'));

for (const card of data.cards) {
  if (card.name.toLowerCase().includes('lyin') || card.name.toLowerCase().includes('eyes')) {
    console.log(`=== "${card.name}" (id: ${card.id}) ===`);
    console.log(`Desc length: ${card.desc.length}`);
    console.log(card.desc.slice(0, 500));
    console.log('-------------------------');
  }
}
