import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

print("=== COMBAT / CHARACTER MECHANICS ===")
combat_list_id = [l["id"] for l in board["lists"] if l["name"] == "Combat/Character Mechanics"][0]
for c in board["cards"]:
    if c["idList"] == combat_list_id:
        print(f"\nCard: {c['name']}")
        print(c.get("desc", ""))

print("=== GAME MECHANICS (LEVEL, STATS) ===")
mech_list_id = [l["id"] for l in board["lists"] if l["name"] == "Game Mechanics"][0]
for c in board["cards"]:
    if c["idList"] == mech_list_id:
        print(f"\nCard: {c['name']}")
        print(c.get("desc", ""))
