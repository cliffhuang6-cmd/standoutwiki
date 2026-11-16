import https from 'https';

const token = process.env.CLOUDFLARE_API_TOKEN;
const accountId = '185120a67364b7bf1662e780c66a0f9c';

function cfRequest(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.cloudflare.com/client/v4${path}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: method,
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
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function main() {
  console.log('--- Fetching Cloudflare Pages Project ---');
  const project = await cfRequest(`/accounts/${accountId}/pages/projects/standoutwiki`);
  console.log('Project current env vars:', JSON.stringify(project.result?.deployment_configs, null, 2));

  console.log('\n--- Updating Cloudflare Pages Environment Variables ---');
  const patchPayload = {
    deployment_configs: {
      production: {
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '20' },
          SITE_INDEXABLE: { type: 'plain_text', value: 'true' }
        }
      },
      preview: {
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '20' },
          SITE_INDEXABLE: { type: 'plain_text', value: 'false' }
        }
      }
    }
  };

  const patchRes = await cfRequest(`/accounts/${accountId}/pages/projects/standoutwiki`, 'PATCH', patchPayload);
  console.log('Patch success:', patchRes.success);
  if (!patchRes.success) {
    console.error('Errors:', patchRes.errors);
  }

  console.log('\n--- Triggering Production Deployment ---');
  const deployRes = await cfRequest(`/accounts/${accountId}/pages/projects/standoutwiki/deployments`, 'POST');
  console.log('Deployment trigger success:', deployRes.success);
  console.log('Deployment details:', {
    id: deployRes.result?.id,
    url: deployRes.result?.url,
    created_on: deployRes.result?.created_on
  });
}

main().catch(console.error);
