import fs from 'node:fs';

const questsTs = fs.readFileSync('src/data/quests.ts', 'utf8');
console.log('quests.ts length:', questsTs.length);
console.log(questsTs.slice(0, 1000));
