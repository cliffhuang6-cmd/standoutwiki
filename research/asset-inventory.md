# Stand Out Wiki — Master Asset Inventory & Licensing Audit

**Website**: `https://standoutwiki.org/`
**Brand**: Stand Out Wiki (Independent Community Resource)
**Status**: Local Production Ready

---

## 1. Brand Identity Assets (100% Original Stand Out Wiki IP)
* `/images/logo/stand-out-wiki-logo.svg` — Original brand logo featuring the golden Stand Arrow glyph, teal emerald badge, and custom typography.
* `/favicon.svg` & `/favicon.ico` — Vector and bitmap browser favicons.
* `/images/og/og-image.webp` — 1200x630 pixel high-resolution social graph card optimized for Twitter, Discord, and Google Discover cards.
* `/images/hero/hero-banner.webp` — Stylized deep teal/emerald game header background.

---

## 2. In-Game Media Assets (Official Studio Umbra Game Visuals)
* **License / Attribution**: Fair use / community game guide documentation of publicly uploaded Studio Umbra developer game previews from official Trello boards (`VDzjwDz2` & `7IlUxQPN`).
* **Format**: Converted to lossy modern WebP with Lanczos downsampling, stripped EXIF metadata, optimized for sub-100ms load times.
* **Storage Directory**:
  * `public/images/stands/` — Pose and character renders for all 44+ playable and upcoming Stands.
  * `public/images/arrows/` — Mysterious, Lucky, Bizarre, Part 3, and Part 5 Arrow visual assets.
  * `public/images/rokakaka/` — Emerald, Sapphire, Amethyst, Opal, and mutation variants.
  * `public/images/items/` — Game items (Phone, Apple, Steel, Lava Rock, Diamonds).
  * `public/images/bosses/` — Boss battle snapshots (Rohan, Charming Man, Ningbo, Laem Chabang).
  * `public/images/locations/` — Raid zones (Train Raid, Highway Star, 77 Rings).

---

## 3. Fallback & Broken Image Mitigation
* Every image element in templates includes responsive `loading="lazy"`, `decoding="async"`, fixed aspect ratios to prevent Cumulative Layout Shift (CLS), and semantic descriptive `alt` text.
* A client-side fallback handler and CSS background placeholders prevent broken image icons in rare offline/missing file scenarios.
