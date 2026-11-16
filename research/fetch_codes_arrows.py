import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for url in ["https://standout.wiki/codes/", "https://standout.wiki/arrows/", "https://stand-out.site/codes"]:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print(f"=== {url} ===")
        # find codes table or list
        if "codes" in url:
            for match in re.findall(r'(SORRY4SHUTDOWN|50KLIKES|35KLIKES|RELEASE|25KLIKES|10KLIKES|5KLIKES|TRAINRAID|UPDATE1|UPDATE2)[^<]{0,100}', html, re.I):
                print("  Code match:", match)
        if "arrows" in url:
            # find percentage rates or tables
            for match in re.findall(r'(\d+[\.\d]*\s*%(?:[^<]{0,60}))', html):
                print("  Rate match:", match)
