import urllib.request
import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

# Find Star Platinum pose or image
headers = {'User-Agent': 'Mozilla/5.0'}
for c in board["cards"]:
    if c["name"] == "Star Platinum" and c.get("attachments"):
        for att in c["attachments"][:3]:
            url = att.get("url")
            print("Trying attachment:", att.get("name"), url)
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req, timeout=5) as resp:
                    data = resp.read()
                    print(f"Success! Downloaded {len(data)} bytes of {att.get('name')}")
            except Exception as e:
                print("Failed:", e)
        break
