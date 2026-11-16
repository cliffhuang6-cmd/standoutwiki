import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request("https://standout.wiki/arrows/", headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# print table
tables = re.findall(r'<table[^>]*>(.*?)</table>', html, re.DOTALL)
for t in tables:
    clean = re.sub(r'<[^>]+>', ' | ', t)
    print("TABLE:")
    print(' '.join(clean.split()))

# also look for text explaining the rates
sections = re.findall(r'<section[^>]*>(.*?)</section>', html, re.DOTALL)
for s in sections[:3]:
    clean = re.sub(r'<[^>]+>', ' ', s)
    print("\nSECTION:")
    print(' '.join(clean.split())[:600])
