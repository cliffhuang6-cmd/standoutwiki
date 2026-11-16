import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request("https://standout.wiki/codes/", headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# print main text
main = re.findall(r'<main[^>]*>(.*?)</main>', html, re.DOTALL)
if main:
    text = re.sub(r'<[^>]+>', '\n', main[0])
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    for l in lines[:100]:
        print(l)
else:
    print("No main found, length:", len(html))
