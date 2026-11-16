import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const listsById = {};
for (const l of data.lists) {
  listsById[l.id] = l.name;
}

for (const card of data.cards) {
  if (card.name.toLowerCase().includes('yellow temperance')) {
    console.log(`List: [${listsById[card.idList]}] | Card: ${card.name} (id: ${card.id})`);
  }
}
