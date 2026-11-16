import fs from 'fs';

const content = fs.readFileSync('src/data/stands.ts', 'utf8');
const prefix = 'export const stands: Stand[] =';
const pIdx = content.indexOf(prefix);
const startIdx = content.indexOf('[', pIdx + prefix.length);
const endIdx = content.indexOf('export const standsBySlug');
const jsonStr = content.substring(startIdx, content.lastIndexOf(']', endIdx) + 1);
const stands = JSON.parse(jsonStr);

console.log('Total stands:', stands.length);

const placeholderMoves = [];
stands.forEach(stand => {
  stand.moveset.forEach(move => {
    if (move.description === '!' || move.description.trim() === '!' || move.description.endsWith('!')) {
      if (move.description === '!' || move.description.length <= 3) {
        placeholderMoves.push({
          stand: stand.name,
          key: move.key,
          name: move.name,
          desc: move.description,
          damage: move.damage,
          cooldown: move.cooldown
        });
      }
    }
  });
});

console.log(`Found ${placeholderMoves.length} moves with placeholder '!' description:`);
placeholderMoves.slice(0, 30).forEach(m => console.log(`${m.stand} [${m.key}] ${m.name}: "${m.desc}" (dmg: ${m.damage}, cd: ${m.cooldown})`));
