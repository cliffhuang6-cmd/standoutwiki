import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/release_VDzjwDz2.json', 'utf8'));
const slugs = ['jojosapiens', 'november-rain', 'big-mouth-strikes-again', 'the-hustle', 'lyin-eyes', 'the-mattekudasai'];

for (const card of data.cards) {
  for (const s of slugs) {
    if (card.name.toLowerCase().includes(s.replace(/-/g, ' '))) {
      console.log(`=== In release_VDzjwDz2.json: "${card.name}" (id: ${card.id}) ===`);
      console.log(`Desc length: ${card.desc.length}`);
      console.log(card.desc.slice(0, 500));
      console.log('\n----------------------------------------\n');
      break;
    }
  }
}
