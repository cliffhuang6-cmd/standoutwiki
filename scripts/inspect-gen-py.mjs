import fs from 'node:fs';

const py = fs.readFileSync('research/generate_stands_data.py', 'utf8');
console.log('generate_stands_data.py length:', py.length);
console.log(py.slice(0, 3000));
