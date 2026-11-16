import json

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

print("=== STORYLINE / QUESTS ===")
for c in board["cards"]:
    lname = lists.get(c["idList"], "")
    if lname in ["Quests", "Raids/Bizarre Adventures", "Enemies/Bosses"]:
        print(f"[{lname}] {c['name']} (desc len: {len(c.get('desc', ''))}, imgs: {len(c.get('attachments', []))})")
        if c.get("desc"):
            print(f"   Snippet: {c['desc'][:200].replace(chr(10), ' ')}")
