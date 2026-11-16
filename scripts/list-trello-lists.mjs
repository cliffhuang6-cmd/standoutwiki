import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const counts = {};
for (const card of data.cards) {
  counts[card.idList] = (counts[card.idList] || 0) + 1;
}

for (const list of data.lists) {
  console.log(`List: "${list.name}" (id: ${list.id}) -> ${counts[list.id] || 0} cards`);
}
