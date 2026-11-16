import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

stands_list_id = [l["id"] for l in board["lists"] if l["name"] == "Stands (Arrow)"][0]
evo_list_id = [l["id"] for l in board["lists"] if l["name"] == "Evolution/Quest/AU Stands"][0]
unfin_list_id = [l["id"] for l in board["lists"] if l["name"] == "Unfinished / In Testing / Reworking"][0]

cards_arrow = [c for c in board["cards"] if c["idList"] == stands_list_id]
cards_evo = [c for c in board["cards"] if c["idList"] == evo_list_id]
cards_unfin = [c for c in board["cards"] if c["idList"] == unfin_list_id]

print(f"Cards in Stands (Arrow) in order ({len(cards_arrow)}):")
current_rarity = "Default"
for c in cards_arrow:
    name = c["name"]
    desc = c.get("desc", "")
    if name in ["Rare", "Epic", "Legendary", "Uncommon", "Common"]:
        current_rarity = name
        print(f"\n--- RARITY SECTION: {name} --- (desc: {desc[:60]}...)")
    elif len(desc) > 300: # Actual stand card
        print(f"  * {name} [{current_rarity}] (desc {len(desc)} chars, {len(c.get('attachments', []))} attachments)")
    else:
        print(f"  [Header/Utility] {name}")

print(f"\nCards in Evolution/Quest/AU Stands ({len(cards_evo)}):")
for c in cards_evo:
    print(f"  * {c['name']} (desc {len(c.get('desc', ''))} chars, {len(c.get('attachments', []))} attachments)")

print(f"\nCards in Unfinished / In Testing / Reworking ({len(cards_unfin)}):")
for c in cards_unfin:
    print(f"  * {c['name']} (desc {len(c.get('desc', ''))} chars, {len(c.get('attachments', []))} attachments)")
