import fs from 'fs';

const indexHtml = fs.readFileSync('dist/index.html', 'utf8');
const itemsHtml = fs.readFileSync('dist/items/index.html', 'utf8');
const questsHtml = fs.readFileSync('dist/quests/index.html', 'utf8');
const codesHtml = fs.readFileSync('dist/codes/index.html', 'utf8');
const guidesHtml = fs.readFileSync('dist/guides/level-up-fast/index.html', 'utf8');
const headersTxt = fs.readFileSync('dist/_headers', 'utf8');

console.log('--- DIST VERIFICATION ---');
console.log('Index has noindex:', indexHtml.includes('content="noindex, follow"'));
console.log('Headers has X-Robots-Tag:', headersTxt.includes('X-Robots-Tag: noindex, follow'));
console.log('Items has id="arrow":', itemsHtml.includes('id="arrow"'));
console.log('Items has id="consumable":', itemsHtml.includes('id="consumable"'));
console.log('Items has id="material":', itemsHtml.includes('id="material"'));
console.log('Items has id="story":', itemsHtml.includes('id="story"'));
console.log('Items has id="stand-chip":', itemsHtml.includes('id="stand-chip"'));
console.log('Quests has id="storyline":', questsHtml.includes('id="storyline"'));
console.log('Quests has id="sub-ability":', questsHtml.includes('id="sub-ability"'));
console.log('Quests has id="bounty":', questsHtml.includes('id="bounty"'));
console.log('Quests has id="side-quest":', questsHtml.includes('id="side-quest"'));
console.log('Guides has id="build-maker":', guidesHtml.includes('id="build-maker"'));
console.log('Codes contains "Unverified":', codesHtml.includes('Unverified'));
console.log('Codes contains "Uncertain":', codesHtml.includes('Uncertain'));
