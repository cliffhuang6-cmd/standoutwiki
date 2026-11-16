import fs from 'fs';

const trello = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

const gardeningCards = trello.cards.filter(c => c.idList === '6ab6b9681f563a014d027cab');
const mutationCards = trello.cards.filter(c => c.idList === '6acaafc460f87ef3d4b2713b');

console.log('Gardening cards count:', gardeningCards.length);
gardeningCards.forEach(c => console.log(`- ${c.name}: ${c.desc.substring(0, 150)}...`));

console.log('\nMutation cards count:', mutationCards.length);
mutationCards.slice(0, 5).forEach(c => console.log(`- ${c.name}: ${c.desc.substring(0, 150)}...`));
