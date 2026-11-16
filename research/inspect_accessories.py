import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

acc_list_id = [l["id"] for l in board["lists"] if l["name"] == "Accessories"][0]
print("=== ACCESSORIES ===")
for c in board["cards"]:
    if c["idList"] == acc_list_id:
        print(f"\nItem: {c['name']} (imgs: {len(c.get('attachments', []))})")
        print(c.get("desc", "")[:250].replace("\n", " "))
