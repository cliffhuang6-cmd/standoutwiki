import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const ytCard = data.cards.find(c => c.name.toLowerCase().includes('yellow temperance'));
console.log('=== FULL YELLOW TEMPERANCE CARD ===');
console.log(ytCard.desc);
