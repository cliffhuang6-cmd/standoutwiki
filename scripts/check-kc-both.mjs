import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const cardsById = new Map(data.cards.map(c => [c.id, c]));

const kf = cardsById.get('6ac602a0a67570b152cd592a');
const kd = cardsById.get('6acab19b9fe44390b9d25d4a');

console.log('=== KING CRIMSON FULL ===');
console.log(kf ? kf.desc.slice(0, 1000) : 'NOT FOUND');

console.log('\n=== KING CRIMSON DOPPIO ===');
console.log(kd ? kd.desc.slice(0, 1000) : 'NOT FOUND');
