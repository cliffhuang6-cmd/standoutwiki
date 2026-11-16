import fs from 'fs';

const trello = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

const arrowStandsListId = '6ab4325be0216771a9c52fc5';
const evoStandsListId = '6ac4ff30d67668e332310906';
const inTestingListId = '6ab436ab2fd94306d30230f7';

const arrowCards = trello.cards.filter(c => c.idList === arrowStandsListId && !c.closed);
const evoCards = trello.cards.filter(c => c.idList === evoStandsListId && !c.closed);
const testingCards = trello.cards.filter(c => c.idList === inTestingListId && !c.closed);

console.log('Arrow Stands count:', arrowCards.length);
console.log('Arrow Stand names:', arrowCards.map(c => c.name));

console.log('\nEvo/Quest/AU Stands count:', evoCards.length);
console.log('Evo/Quest/AU Stand names:', evoCards.map(c => c.name));

console.log('\nTesting Cards count:', testingCards.length);
console.log('Testing Stand names:', testingCards.map(c => c.name));
