// functions/_middleware.ts
// Device-targeted HTML filtering for Adsterra slots on Cloudflare Pages.
// Removes desktop-only ad markup on mobile User-Agents and mobile-only markup on desktop User-Agents
// without modifying, rewriting, or reordering any kept Adsterra <script> tags.

interface PagesContext {
  request: Request;
  next: () => Promise<Response>;
}

const MOBILE_UA_RE =
  /Android.*Mobile|iPhone|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini|Mobile.*Firefox|CriOS.*Mobile/i;

export async function onRequest(context: PagesContext) {
  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('text/html') || context.request.method !== 'GET') {
    return response;
  }

  const ua = context.request.headers.get('user-agent') || '';
  const chMobile = context.request.headers.get('sec-ch-ua-mobile');
  const isMobile = MOBILE_UA_RE.test(ua) || chMobile === '?1';

  const html = await response.text();
  const marker = isMobile ? 'desktop' : 'mobile';
  const pattern = new RegExp(
    `<!-- ADSTERRA_DEVICE:${marker}:start -->[\\s\\S]*?<!-- ADSTERRA_DEVICE:${marker}:end -->`,
    'g'
  );

  const filtered = html.replace(pattern, '');
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('Accept-CH', 'Sec-CH-UA-Mobile');
  headers.append('Vary', 'User-Agent');
  headers.append('Vary', 'Sec-CH-UA-Mobile');

  return new Response(filtered, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
