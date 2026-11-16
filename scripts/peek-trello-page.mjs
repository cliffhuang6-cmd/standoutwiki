import fs from 'node:fs';

const trello = fs.readFileSync('src/pages/trello.astro', 'utf8');
console.log('trello.astro length:', trello.length);
console.log(trello.slice(0, 1500));
