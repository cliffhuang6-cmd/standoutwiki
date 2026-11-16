import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

console.log('Searching for codes in Trello updates...');
for (const card of data.cards) {
  const t = (card.name + ' ' + card.desc).toLowerCase();
  if (t.includes('code') || t.includes('gift') || t.includes('redeem')) {
    console.log(`[${card.name}]`);
    console.log(card.desc.slice(0, 300));
    console.log('---');
  }
}
