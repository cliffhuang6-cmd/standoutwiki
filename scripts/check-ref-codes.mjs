import fs from 'node:fs';

const c1 = fs.existsSync('research/fetch_codes_table.py') ? fs.readFileSync('research/fetch_codes_table.py', 'utf8') : '';
const c2 = fs.existsSync('research/fetch_codes_text.py') ? fs.readFileSync('research/fetch_codes_text.py', 'utf8') : '';
console.log('Codes table python:', c1.slice(0, 1000));
console.log('Codes text python:', c2.slice(0, 1000));
