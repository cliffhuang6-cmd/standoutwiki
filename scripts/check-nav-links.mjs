import fs from 'node:fs';

const nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
const lines = nav.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Play') || l.includes('Roblox') || l.includes('roblox') || l.includes('external')) {
    console.log(`Navbar.tsx:${i+1}: ${l}`);
  }
});
