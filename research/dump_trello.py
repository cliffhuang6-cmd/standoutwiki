import urllib.request
import json
import os

boards = {
    "7IlUxQPN": "official_7IlUxQPN.json",
    "VDzjwDz2": "release_VDzjwDz2.json"
}

out_dir = r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello"
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0'}

for b_id, fname in boards.items():
    dest = os.path.join(out_dir, fname)
    if os.path.exists(dest) and os.path.getsize(dest) > 10000:
        print(f"Already have {fname}")
        continue
    url = f"https://api.trello.com/1/boards/{b_id}?cards=all&card_fields=all&card_attachments=true&lists=all&list_fields=all&customFields=true"
    print(f"Fetching {b_id}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(dest, "wb") as f:
                f.write(data)
            print(f"Saved {fname} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error fetching {b_id}: {e}")
