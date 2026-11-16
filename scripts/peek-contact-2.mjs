import fs from 'node:fs';

const contact = fs.readFileSync('src/pages/contact.astro', 'utf8');
console.log(contact.split('\n').slice(40, 85).join('\n'));
