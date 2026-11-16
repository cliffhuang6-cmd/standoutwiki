import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

print("=== ROKAKA MUTATIONS ===")
roka_list_id = [l["id"] for l in board["lists"] if l["name"] == "Rokaka Mutations"][0]
for c in board["cards"]:
    if c["idList"] == roka_list_id:
        print(f"\nMutation: {c['name']}")
        print(c.get("desc", "")[:300].replace("\n", " "))

print("\n=== GARDENING ITEMS (SAMPLE) ===")
garden_list_id = [l["id"] for l in board["lists"] if l["name"] == "Gardening / Gardening Items"][0]
for c in board["cards"]:
    if c["idList"] == garden_list_id:
        if any(w in c["name"].lower() for w in ["pot", "soil", "fertilizer", "seed", "water", "how", "mechanic"]):
            print(f"\nGarden: {c['name']}")
            print(c.get("desc", "")[:300].replace("\n", " "))
