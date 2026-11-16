import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request("https://standout.wiki/codes/", headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# find tables and codes
tables = re.findall(r'<table[^>]*>(.*?)</table>', html, re.DOTALL)
for idx, t in enumerate(tables):
    clean = re.sub(r'<[^>]+>', ' | ', t)
    print(f"TABLE {idx}:")
    print(' '.join(clean.split()))
