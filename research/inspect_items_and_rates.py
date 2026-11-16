import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

print("=== CHECKING ITEMS ===")
items_list_id = [l["id"] for l in board["lists"] if l["name"] == "Items"][0]
for c in board["cards"]:
    if c["idList"] == items_list_id:
        print(f"\nItem: {c['name']}")
        print(c.get("desc", "")[:400])

print("\n=== CHECKING STAND ARROWS AND DROP RATES IN GAME MECHANICS OR FAQ ===")
for c in board["cards"]:
    if any(k in c["name"].lower() for k in ["arrow", "rarit", "rate", "drop", "chance", "pity"]):
        print(f"\nCard: {c['name']} (List: {lists.get(c['idList'])})")
        print(c.get("desc", "")[:500])
