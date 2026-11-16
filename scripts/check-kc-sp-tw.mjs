import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

for (const card of data.cards) {
  const n = card.name.toLowerCase();
  if (n.includes('the world') || n.includes('star platinum') || n.includes('king crimson')) {
    console.log(`[${card.idList}] "${card.name}" (id: ${card.id})`);
  }
}
