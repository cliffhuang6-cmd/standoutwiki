import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const slugs = ['lyin-eyes', 'the-mattekudasai', 'the-hustle', 'november-rain', 'big-mouth-strikes-again', 'jojosapiens'];

for (const card of data.cards) {
  for (const s of slugs) {
    if (card.name.toLowerCase().includes(s.replace(/-/g, ' '))) {
      console.log(`=== ${card.name} (id: ${card.id}) ===`);
      console.log(card.desc);
      console.log('-------------------------------------------');
      break;
    }
  }
}
