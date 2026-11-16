import fs from 'node:fs';

const py = fs.readFileSync('research/generate_stands_data.py', 'utf8');
console.log(py.slice(7000, 12000));
