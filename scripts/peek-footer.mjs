import fs from 'node:fs';

const footer = fs.readFileSync('src/components/Footer.astro', 'utf8');
console.log(footer.split('\n').slice(0, 70).join('\n'));
