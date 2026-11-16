import fs from 'node:fs';

const filePath = 'C:/Users/chaofan/.gemini/antigravity/scratch/stand-out-wiki/src/data/stands.ts';
let code = fs.readFileSync(filePath, 'utf8');

// Match each stand and scale/rebalance points based on combatRole or original ratio
const updated = code.replace(/("combatRole":\s*"([^"]+)",[\s\S]*?"recommendedBuild":\s*\{\s*"points":\s*\{\s*"health":\s*)\d+(,\s*"damage":\s*)\d+(,\s*"ability":\s*)\d+/g, (match, prefix, role, mid1, mid2) => {
  let h = 50, d = 50, a = 50;
  if (role === 'Offense' || role === 'Brawler') {
    h = 45; d = 65; a = 40;
  } else if (role === 'Defense' || role === 'Tank') {
    h = 65; d = 45; a = 40;
  } else if (role === 'Disruption' || role === 'Specialist' || role === 'Utility') {
    h = 45; d = 45; a = 60;
  } else if (role === 'Ranged' || role === 'Zoner') {
    h = 40; d = 55; a = 55;
  } else {
    // Balanced
    h = 50; d = 50; a = 50;
  }
  return `${prefix}${h}${mid1}${d}${mid2}${a}`;
});

fs.writeFileSync(filePath, updated);
console.log('Successfully rebalanced recommendedBuild stat points to sum to exactly 150 points across all stands.');
