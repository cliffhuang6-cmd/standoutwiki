from PIL import Image, ImageDraw, ImageFont
import os
import io

base_dir = r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\public"

# 1. Logo SVG
logo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 80" width="420" height="80">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#047857" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Arrow Icon Emblem -->
  <g transform="translate(10, 10)">
    <!-- Shield / Emblem Background -->
    <rect x="0" y="0" width="60" height="60" rx="14" fill="url(#tealGrad)" filter="url(#glow)"/>
    <!-- Stand Arrow Head Silhouette -->
    <path d="M 30 12 L 44 32 L 34 32 L 34 46 L 26 46 L 26 32 L 16 32 Z" fill="url(#goldGrad)" />
    <!-- Beetle Gem Inset -->
    <circle cx="30" cy="27" r="3.5" fill="#EF4444" stroke="#FDE047" stroke-width="1"/>
    <!-- Wing Flares -->
    <path d="M 16 32 Q 22 38 26 34" stroke="#FCD34D" stroke-width="2" fill="none"/>
    <path d="M 44 32 Q 38 38 34 34" stroke="#FCD34D" stroke-width="2" fill="none"/>
  </g>

  <!-- Brand Typography -->
  <text x="82" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="900" fill="#0F172A" letter-spacing="-0.5">STAND OUT</text>
  <rect x="250" y="16" width="76" height="26" rx="6" fill="#0D9488" />
  <text x="288" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">WIKI</text>
  
  <text x="83" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#64748B" letter-spacing="0.5">THE DEFINITIVE ROBLOX DATABASE &amp; GUIDES</text>
</svg>
"""

with open(os.path.join(base_dir, "images", "logo", "stand-out-wiki-logo.svg"), "w", encoding="utf-8") as f:
    f.write(logo_svg)

with open(os.path.join(base_dir, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write("""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#065F46"/>
    </linearGradient>
    <linearGradient id="arrow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#bg)"/>
  <path d="M 32 12 L 48 34 L 37 34 L 37 50 L 27 50 L 27 34 L 16 34 Z" fill="url(#arrow)"/>
  <circle cx="32" cy="28" r="4" fill="#DC2626"/>
</svg>""")

print("Generated Logo and Favicon SVGs")

# 2. Open Graph Card (1200x630)
og = Image.new("RGB", (1200, 630), color="#0F172A")
draw = ImageDraw.Draw(og)

# Background subtle decorative gradient / geometry
for y in range(630):
    r = int(15 + (y / 630) * 15)
    g = int(23 + (y / 630) * 45)
    b = int(42 + (y / 630) * 40)
    draw.line([(0, y), (1200, y)], fill=(r, g, b))

# Decorative grid/accent lines
draw.rectangle([40, 40, 1160, 590], outline="#0D9488", width=3)
draw.rectangle([46, 46, 1154, 584], outline="#1E293B", width=1)

# Accent badge
draw.rounded_rectangle([80, 80, 360, 125], radius=8, fill="#0D9488")
draw.text((100, 92), "ROBLOX STAND OUT WIKI", fill="#FFFFFF")

# Big Title
draw.text((80, 160), "STAND OUT WIKI", fill="#FFFFFF")
draw.text((80, 240), "Complete Stand Database, Codes, Tier Lists & Guides", fill="#38BDF8")

# Value props bullets
props = [
    ("44+ Verified Stands", "Full movesets, damage scaling & keybinds"),
    ("Live Working Codes", "Instant copy, new server verification alerts"),
    ("PvP & Raid Tier Lists", "Competitive rankings with clear criteria"),
    ("Arrow & Build Tools", "Exact Bernoulli probability & stat builder")
]

x_box = 80
y_box = 340
for title, desc in props:
    draw.rounded_rectangle([x_box, y_box, x_box + 500, y_box + 85], radius=10, fill="#1E293B", outline="#334155")
    draw.text((x_box + 20, y_box + 15), title, fill="#FACC15")
    draw.text((x_box + 20, y_box + 45), desc, fill="#94A3B8")
    y_box += 105
    if y_box > 450:
        y_box = 340
        x_box = 620

# Domain footer
draw.text((80, 560), "Official URL: https://standoutwiki.org/", fill="#10B981")
draw.text((850, 560), "Updated for November 2026", fill="#64748B")

og_dest = os.path.join(base_dir, "images", "og", "og-image.webp")
og.save(og_dest, "WEBP", quality=90)
print("Generated OG Image:", og_dest)

# 3. Hero Visual Background (1600x900)
hero = Image.new("RGB", (1600, 900), color="#042F2E")
hdraw = ImageDraw.Draw(hero)
for y in range(900):
    r = int(4 + (y / 900) * 10)
    g = int(47 - (y / 900) * 20)
    b = int(46 - (y / 900) * 15)
    hdraw.line([(0, y), (1600, y)], fill=(r, g, b))

hero_dest = os.path.join(base_dir, "images", "hero", "hero-banner.webp")
hero.save(hero_dest, "WEBP", quality=85)
print("Generated Hero Banner:", hero_dest)
