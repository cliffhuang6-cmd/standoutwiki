# Stand Out Wiki — Production Deployment & Go-Live Runbook

**Official Website**: Stand Out Wiki  
**Production Domain**: `https://standoutwiki.org/`  
**Hosting Target**: Cloudflare Pages (Free Tier)  
**Framework**: Astro v5 (Static Output)  
**Status**: Ready for Instant Deployment  

---

## ⚠️ Important Pre-Deployment Notice
Per project instructions, **no automated remote deployment, git push, or DNS alteration** was performed by the agent. All builds and assets are self-contained locally in:
`C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki`

Follow the verified steps below when you are ready to publish the website to production.

---

## Phase 1: Build & Output Artifacts

The project is built into standard static HTML/CSS/JS inside the `dist/` directory.

### Build Commands
```bash
# In project root: C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki
npm run build
```
- **Build Command**: `astro build` (or `npm run build` which runs integrity checks + Astro check + postbuild)
- **Output Directory**: `dist`
- **Node.js Version**: `>= 18.17.1` (Recommended: `20.x` or `24.x`)
- **Generated Pages**: 88 static HTML pages

---

## Phase 2: Cloudflare Pages Setup

### Option A: Direct Git Integration (Recommended for CI/CD)
1. Push the repository to GitHub / GitLab (e.g., `github.com/your-org/stand-out-wiki`).
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
4. Select the repository `stand-out-wiki`.
5. In **Build Settings**:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
6. In **Environment variables (Advanced)**:
   - `NODE_VERSION`: `20.18.0`
7. Click **Save and Deploy**.

### Option B: Cloudflare Direct Upload via Wrangler CLI
If you prefer deploying directly from your local terminal without connecting Git:
```bash
# 1. Install Wrangler globally or use npx
npx wrangler pages deploy dist --project-name=stand-out-wiki
```

---

## Phase 3: Custom Domain & Apex 301 Redirect

Your Cloudflare domain `standoutwiki.org` is already activated on the Free Plan.

### 1. Link Custom Domain to Cloudflare Pages
1. In Cloudflare Dashboard, go to your Pages project (`stand-out-wiki`).
2. Click **Custom domains** tab > **Set up a custom domain**.
3. Enter `standoutwiki.org` and confirm. Cloudflare will automatically configure the CNAME/DNS record.

### 2. Configure `www.standoutwiki.org` -> `standoutwiki.org` 301 Permanent Redirect
To prevent duplicate content and consolidate all PageRank on the apex domain:
1. Go to **Cloudflare Dashboard** > **Websites** > `standoutwiki.org` > **Rules** > **Redirect Rules** (or **Page Rules**).
2. Create a Redirect Rule:
   - **Rule Name**: `Redirect WWW to Apex`
   - **When incoming requests match**:
     - Field: `Hostname`
     - Operator: `equals`
     - Value: `www.standoutwiki.org`
   - **Then**:
     - Type: `Dynamic`
     - Status code: `301 Moved Permanently`
     - Expression: `concat("https://standoutwiki.org", http.request.uri.path)`
3. Ensure DNS has a CNAME for `www` proxied (Orange Cloud) pointing to `standoutwiki.org` or your Pages CNAME.

---

## Phase 4: Third-Party Services Verification

All third-party IDs are pre-coded into the production build:

### 1. Google Search Console (GSC)
- **Status**: Domain Property `standoutwiki.org` has already been added via Cloudflare DNS TXT record.
- **Sitemap Submission**:
  1. Open [Google Search Console](https://search.google.com/search-console).
  2. Select the `standoutwiki.org` Domain Property.
  3. Go to **Sitemaps** in the left sidebar.
  4. Submit URL: `sitemap.xml` (which resolves to `https://standoutwiki.org/sitemap.xml`).

### 2. Bing Webmaster Tools
- **Status**: Site already connected.
- **Sitemap Submission**:
  1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/).
  2. Select `https://standoutwiki.org/`.
  3. Go to **Sitemaps** > **Submit Sitemap** > enter `https://standoutwiki.org/sitemap.xml`.

### 3. Google Analytics 4 (GA4)
- **Measurement ID**: `G-P9Q9F4LS71`
- **Behavior**:
  - Embedded in `Layout.astro` via official Google Tag snippet (`gtag.js`).
  - Active only when `isProd` is `true`.
  - Sends initial pageview on page load; handles client hydration seamlessly.
- **Verification**:
  - Open `https://standoutwiki.org/` in an incognito window after deployment.
  - Check [Google Analytics Realtime Report](https://analytics.google.com/) to confirm active visitors.

### 4. Microsoft Clarity
- **Project ID**: `zee7d2kwl5`
- **Behavior**:
  - Embedded in `Layout.astro` via official Clarity script.
  - Active only in production.
  - Masking mode respects user privacy; mobile touch tracking enabled.
- **Verification**:
  - Check [Microsoft Clarity Dashboard](https://clarity.microsoft.com/) to confirm live telemetry packets.

---

## Phase 5: Instant Indexing via IndexNow

The site includes a pre-configured IndexNow endpoint and deployment script:

### IndexNow Endpoint
- **Key**: `9e3bf17482a5490bb59e51cfa82d7031`
- **Public Key File**: `https://standoutwiki.org/9e3bf17482a5490bb59e51cfa82d7031.txt`
- **Generated Location**: `dist/9e3bf17482a5490bb59e51cfa82d7031.txt`

### Submitting All 88 URLs Immediately
Once `https://standoutwiki.org/` is live on Cloudflare, run the submission script from your local machine:
```bash
node scripts/indexnow.mjs
```
The script sends an HTTP POST request to `https://api.indexnow.org/IndexNow` notifying Bing, Yandex, and Naver to crawl and index all 88 URLs within minutes.

---

## Phase 6: Post-Deployment Smoke Test Checklist

- [ ] `https://standoutwiki.org/` returns HTTP 200 OK.
- [ ] `http://standoutwiki.org/` automatically redirects to `https://standoutwiki.org/`.
- [ ] `https://www.standoutwiki.org/` returns HTTP 301 redirecting to `https://standoutwiki.org/`.
- [ ] `https://standoutwiki.org/sitemap.xml` loads XML sitemap index.
- [ ] `https://standoutwiki.org/robots.txt` loads properly and references the sitemap.
- [ ] `https://standoutwiki.org/9e3bf17482a5490bb59e51cfa82d7031.txt` returns the plain text key.
- [ ] Brand Logo and Favicon render crisply on desktop and mobile.
- [ ] Search Modal (`Ctrl+K` or `/`) opens and searches all Stands/Guides.
- [ ] Arrow Calculator computes probabilities interactively without JavaScript errors.
- [ ] Build Maker allocates 225 points and updates stat charts.
- [ ] Contact links open `mailto:contact@standoutwiki.org`.
