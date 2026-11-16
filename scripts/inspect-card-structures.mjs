import fs from 'fs';

const trello = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));

const standListIds = new Set([
  '6ab4325be0216771a9c52fc5', // Arrow
  '6ac4ff30d67668e332310906', // Evo/Quest/AU
  '6ab436ab2fd94306d30230f7'  // Testing
]);

const samples = ['Star Platinum', 'The World', 'Kraft Work', 'Cinderella', 'Rolling Stones'];

samples.forEach(name => {
  const card = trello.cards.find(c => standListIds.has(c.idList) && c.name.toLowerCase() === name.toLowerCase());
  if (card) {
    console.log(`\n================== CARD: ${card.name} ==================`);
    console.log(card.desc.substring(0, 1500));
  }
});
