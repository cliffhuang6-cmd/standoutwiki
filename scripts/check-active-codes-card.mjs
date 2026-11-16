import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const c = data.cards.find(card => card.name.toLowerCase().includes('active codes'));
console.log('Active Codes card:');
console.log(c ? c.desc : 'NOT FOUND');
console.log(c ? c.id : '');
