import urllib.request
import re
import json

sites = [
    'https://standout.wiki',
    'https://stand-out.site',
    'https://roblox-standout.wiki'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for site in sites:
    print(f"=== Checking {site} ===")
    for path in ['/', '/sitemap.xml', '/robots.txt']:
        url = site + path
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                print(f"  {path}: status {resp.status}, size {len(data)} bytes")
                if path == '/robots.txt':
                    print("   robots sample:", data.decode('utf-8', errors='ignore')[:200].replace('\n', ' '))
                elif path == '/sitemap.xml':
                    matches = re.findall(r'<loc>(.*?)</loc>', data.decode('utf-8', errors='ignore'))
                    print(f"   sitemap loc count: {len(matches)}")
                    if matches:
                        print(f"   sample urls: {matches[:5]}")
        except Exception as e:
            print(f"  {path}: error {e}")
