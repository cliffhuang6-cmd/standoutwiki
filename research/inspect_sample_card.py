import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

sample_names = ["Kraft Work", "Star Platinum", "The World", "King Crimson", "November Rain", "Highway Star"]

for c in board["cards"]:
    if c["name"] in sample_names:
        print(f"\n======================================")
        print(f"STAND: {c['name']} (List: {lists.get(c['idList'])})")
        print(f"Attachments ({len(c.get('attachments', []))}):")
        for att in c.get("attachments", [])[:5]:
            print(f"  - {att.get('name')}: {att.get('url')}")
        print(f"Desc snippet (first 1000 chars):")
        print(c.get("desc", "")[:1000])
