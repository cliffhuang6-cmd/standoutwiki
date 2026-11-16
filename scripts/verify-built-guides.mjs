import fs from 'node:fs';

const sampleSlugs = ['farm-dalas', 'lucky-arrows', 'star-platinum', 'hamon', 'raids', 'gardening'];
for (const slug of sampleSlugs) {
  const htmlPath = `dist/guides/${slug}/index.html`;
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const hasTOC = html.includes('Table of Contents');
    const hasActionSteps = html.includes('Action Steps');
    const hasProTip = html.includes('Pro Strategy Tip');
    console.log(`✓ ${slug}: ${html.length} bytes | TOC: ${hasTOC} | Steps: ${hasActionSteps} | Tips: ${hasProTip}`);
  } else {
    console.log(`✗ ${slug} missing in dist!`);
  }
}
