import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

urls = [
    "https://standout.wiki/arrows/",
    "https://standout.wiki/codes/",
    "https://standout.wiki/tier-list/",
    "https://stand-out.site/codes",
    "https://roblox-standout.wiki/arrows/",
    "https://roblox-standout.wiki/codes/"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            clean = re.sub(r'<[^>]+>', ' ', content)
            clean = ' '.join(clean.split())
            print(f"\n=== URL: {url} (status {resp.status}) ===")
            print(clean[:800])
    except Exception as e:
        print(f"Error {url}: {e}")
