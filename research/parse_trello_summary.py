import json
import os

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\official_7IlUxQPN.json", "r", encoding="utf-8") as f:
    board1 = json.load(f)

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board2 = json.load(f)

print("Board 1 name:", board1.get("name"))
print("Board 2 name:", board2.get("name"))

lists1 = {l["id"]: l["name"] for l in board1.get("lists", [])}
lists2 = {l["id"]: l["name"] for l in board2.get("lists", [])}

print("\n--- Board 1 Lists & Card Counts ---")
cards_by_list1 = {}
for c in board1.get("cards", []):
    lname = lists1.get(c["idList"], "Unknown")
    cards_by_list1[lname] = cards_by_list1.get(lname, 0) + 1
for lname, cnt in cards_by_list1.items():
    print(f"  {lname}: {cnt} cards")

print("\n--- Board 2 Lists & Card Counts ---")
cards_by_list2 = {}
for c in board2.get("cards", []):
    lname = lists2.get(c["idList"], "Unknown")
    cards_by_list2[lname] = cards_by_list2.get(lname, 0) + 1
for lname, cnt in cards_by_list2.items():
    print(f"  {lname}: {cnt} cards")
