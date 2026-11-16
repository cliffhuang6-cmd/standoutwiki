import fs from 'node:fs';
import path from 'node:path';

function searchInDir(dir, query) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', 'dist', '.astro'].includes(entry.name)) {
        searchInDir(fullPath, query);
      }
    } else if (entry.isFile()) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(query)) {
        console.log(`Found "${query}" in ${fullPath}`);
      }
    }
  }
}

console.log('Searching for "44+" and "44":');
searchInDir('src', '44+');
searchInDir('src', '44 ');
searchInDir('reports', '44');
