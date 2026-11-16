import fs from 'node:fs';

const contact = fs.readFileSync('src/pages/contact.astro', 'utf8');
console.log(contact.slice(0, 2000));
