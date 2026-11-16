import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('research/raw_trello/official_7IlUxQPN.json', 'utf8'));
const cardsById = new Map(data.cards.map(c => [c.id, c]));

// Load the 43 stand definitions
import { } from './verify-all-43-meta.mjs';

// Let's create an extraction tester
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .replace(/---/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/##/g, '')
    .replace(/#/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\\/g, '')
    .trim();
}

function parseCardContent(cardDesc) {
  const sections = cardDesc.split(/(?:^|\n)##\s+/);
  const items = [];
  
  for (let i = 1; i < sections.length; i++) {
    const raw = sections[i];
    const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    
    const rawHeader = lines[0].replace(/\*\*/g, '').replace(/:$/, '').trim();
    // body lines without images
    const bodyLines = lines.slice(1).filter(l => !l.startsWith('![') && !l.startsWith('---'));
    const bodyText = cleanText(bodyLines.join(' '));
    
    // Look for cooldown and damage
    let cooldown = undefined;
    let damage = undefined;
    
    const cdMatch = bodyText.match(/(?:base\s+)?cooldown:\s*([0-9.]+\s*s(?:econds?)?)/i);
    if (cdMatch) {
      cooldown = cdMatch[1].trim();
    }
    
    const dmgMatch = bodyText.match(/damage:\s*([0-9.]+(?:\s*-\s*[0-9.]+)?(?:\s*DMG|\s*%)?)/i);
    if (dmgMatch) {
      damage = dmgMatch[1].trim();
    }
    
    items.push({
      header: rawHeader,
      body: bodyText,
      cooldown,
      damage,
      rawLines: lines
    });
  }
  return items;
}

// Check sample
const ytCard = cardsById.get('6abc324b5b8abd5060497d3b');
const ytItems = parseCardContent(ytCard.desc);
console.log('Yellow Temperance items:', ytItems.map(i => `${i.header} (body: ${i.body.length} chars, cd: ${i.cooldown || 'none'})`));
