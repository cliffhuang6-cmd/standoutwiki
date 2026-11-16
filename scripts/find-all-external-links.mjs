import fs from 'node:fs';
import path from 'node:path';

function findExternalLinks(dir) {
  const matches = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (!['node_modules', '.git', 'dist', '.astro'].includes(item.name)) {
        matches.push(...findExternalLinks(full));
      }
    } else {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, i) => {
        if (line.includes('https://www.roblox.com') || line.includes('https://roblox.com') || line.includes('discord.gg') || line.includes('trello.com/b/')) {
          matches.push({ file: full, line: i + 1, content: line.trim() });
        }
      });
    }
  }
  return matches;
}

const res = findExternalLinks('src');
console.log(`Found ${res.length} external official links:`);
res.forEach(r => console.log(`${r.file}:${r.line} -> ${r.content}`));
