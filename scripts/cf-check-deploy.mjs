import https from 'https';

const token = process.env.CLOUDFLARE_API_TOKEN;
const accountId = '185120a67364b7bf1662e780c66a0f9c';

function cfRequest(path) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.cloudflare.com/client/v4${path}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve({ raw: data, status: res.statusCode });
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const deployments = await cfRequest(`/accounts/${accountId}/pages/projects/standoutwiki/deployments?per_page=3`);
  deployments.result?.forEach((d, idx) => {
    console.log(`[Deployment ${idx + 1}] ID: ${d.id}`);
    console.log(`  Created: ${d.created_on}`);
    console.log(`  Commit: ${d.deployment_trigger?.metadata?.commit_hash?.slice(0, 7)} - ${d.deployment_trigger?.metadata?.commit_message}`);
    console.log(`  Stage: ${d.latest_stage?.name} | Status: ${d.latest_stage?.status}`);
    console.log(`  URL: ${d.url}`);
    console.log(`  Aliases: ${d.aliases?.join(', ') || 'none'}\n`);
  });
}

main().catch(console.error);
