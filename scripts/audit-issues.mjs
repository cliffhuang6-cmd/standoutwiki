import fs from 'fs';
import path from 'path';

// 1. Check stands count & missing stands
const standsContent = fs.readFileSync('src/data/stands.ts', 'utf8');
const standSlugs = [...standsContent.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Stands count in stands.ts:', standSlugs.length);

// Compare with game-data-audit.md
if (fs.existsSync('research/game-data-audit.md')) {
  const auditContent = fs.readFileSync('research/game-data-audit.md', 'utf8');
  console.log('game-data-audit.md exists.');
}

// Check raw trello cards
if (fs.existsSync('research/raw_trello/official_7IlUxQPN.json')) {
  const trello1 = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
  console.log('Official Trello cards count:', trello1.cards?.length);
  // find Stand lists
  const lists = trello1.lists || [];
  console.log('Lists:', lists.map(l => ({ id: l.id, name: l.name })));
}

// 2. Check "!" in move descriptions
const exclamationCount = (standsContent.match(/description":\s*"!"/g) || []).length;
console.log('Occurrences of description: "!":', exclamationCount);

// Check duplicate 12s cooldown and Moderate damage
const cd12Count = (standsContent.match(/cooldown":\s*"12s"/g) || []).length;
const modDmgCount = (standsContent.match(/damage":\s*"Moderate"/g) || []).length;
console.log('Occurrences of cooldown: "12s":', cd12Count);
console.log('Occurrences of damage: "Moderate":', modDmgCount);

// 3. Check passives in stands.ts
const standMasteryCount = (standsContent.match(/name":\s*"Stand Mastery"/g) || []).length;
const combatPressureCount = (standsContent.match(/name":\s*"Combat Pressure"/g) || []).length;
console.log('Occurrences of Stand Mastery:', standMasteryCount);
console.log('Occurrences of Combat Pressure:', combatPressureCount);

// 4. Check guides content
const guidesContent = fs.readFileSync('src/data/guides.ts', 'utf8');
const guideSlugs = [...guidesContent.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Guide slugs count:', guideSlugs.length);
