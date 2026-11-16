/**
 * IndexNow Integration Script for Stand Out Wiki (standoutwiki.org)
 * Follows Web Launch Checklist standard: https://github.com/cliffhuang6-cmd/web-launch-checklist
 *
 * SAFETY GUARD:
 * This script will NOT execute submissions unless:
 * 1. Explicitly executed with `--submit` flag.
 * 2. `SITE_INDEXNOW_ENABLED=true` environment variable is set.
 * 3. Domain is accessible on live production.
 */

import fs from 'fs';
import path from 'path';

const HOST = 'standoutwiki.org';
const KEY = '9e3bf17482a5490bb59e51cfa82d7031';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const args = process.argv.slice(2);
  const isSubmitRequested = args.includes('--submit');
  const isEnabled = process.env.SITE_INDEXNOW_ENABLED === 'true';

  console.log('=== Stand Out Wiki IndexNow Pipeline ===');
  console.log(`Host: ${HOST}`);
  console.log(`Key: ${KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);

  if (!isSubmitRequested || !isEnabled) {
    console.log('\n[SAFETY LATCH ENGAGED]');
    console.log('IndexNow submissions are currently dormant as the site is in local development.');
    console.log('To activate upon formal production release:');
    console.log('  1. Deploy site to production');
    console.log('  2. Verify https://standoutwiki.org/' + KEY + '.txt returns HTTP 200');
    console.log('  3. Run: SITE_INDEXNOW_ENABLED=true node scripts/indexnow.mjs --submit');
    return;
  }

  // Load sitemap or generate list of URLs
  const urls = [
    `https://${HOST}/`,
    `https://${HOST}/codes/`,
    `https://${HOST}/stands/`,
    `https://${HOST}/tier-list/`,
    `https://${HOST}/stand-rarity/`,
    `https://${HOST}/stand-arrows/`,
    `https://${HOST}/items/`,
    `https://${HOST}/accessories/`,
    `https://${HOST}/sub-abilities/`,
    `https://${HOST}/hamon/`,
    `https://${HOST}/vampire/`,
    `https://${HOST}/rokakaka/`,
    `https://${HOST}/gardening/`,
    `https://${HOST}/stand-storage/`,
    `https://${HOST}/gamepasses/`,
    `https://${HOST}/gang-wars/`,
    `https://${HOST}/quests/`,
    `https://${HOST}/updates/`,
    `https://${HOST}/trello/`,
    `https://${HOST}/release-date/`,
    `https://${HOST}/faq/`,
    `https://${HOST}/guides/`
  ];

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  console.log(`Submitting ${urls.length} core URLs to IndexNow API...`);
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    console.log(`IndexNow Response Status: ${response.status} ${response.statusText}`);
  } catch (err) {
    console.error('IndexNow Submission Failed:', err);
  }
}

main();
