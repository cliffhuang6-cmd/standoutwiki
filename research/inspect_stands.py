import json
import re

with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json", "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

target_lists = [
    "Stands (Arrow)",
    "Evolution/Quest/AU Stands",
    "Exclusive Stands",
    "Sub-Abilities",
    "Unfinished / In Testing / Reworking"
]

stands = []
for c in board["cards"]:
    lname = lists.get(c["idList"], "")
    if lname in target_lists:
        # Check attachments
        attachments = c.get("attachments", [])
        image_attachments = [a for a in attachments if a.get("isUpload") or any(ext in a.get("url", "").lower() for ext in [".png", ".jpg", ".jpeg", ".webp"])]
        
        stands.append({
            "id": c["id"],
            "name": c["name"],
            "list": lname,
            "desc_len": len(c.get("desc", "")),
            "desc_preview": c.get("desc", "")[:200].replace("\n", " "),
            "images_count": len(image_attachments),
            "sample_image": image_attachments[0]["url"] if image_attachments else None
        })

print(f"Total stands/abilities found: {len(stands)}")
for s in stands[:30]:
    print(f"[{s['list']}] {s['name']} (desc len: {s['desc_len']}, imgs: {s['images_count']})")
    print(f"   Preview: {s['desc_preview'][:100]}")
