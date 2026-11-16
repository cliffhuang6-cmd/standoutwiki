import json
import re

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

for c in board["cards"]:
    desc = c.get("desc", "")
    if "%" in desc or "rate" in desc.lower() or "rarity" in desc.lower() or "chance" in desc.lower():
        if any(w in c["name"].lower() for w in ["arrow", "stand", "pity", "rarit", "rate", "roll"]):
            print(f"=== {c['name']} ===")
            print(desc[:500])
            print("---")
