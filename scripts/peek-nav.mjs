import fs from 'node:fs';

const nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
console.log(nav.split('\n').slice(65, 125).join('\n'));
