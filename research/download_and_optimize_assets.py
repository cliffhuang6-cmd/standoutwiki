import json
import urllib.request
import os
import io
import re
from PIL import Image

trello_file = r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\research\raw_trello\release_VDzjwDz2.json"
out_base = r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\public\images"

with open(trello_file, "r", encoding="utf-8") as f:
    board = json.load(f)

lists = {l["id"]: l["name"] for l in board["lists"]}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

manifest = []

def slugify(text):
    text = re.sub(r'[\':!?,.()\[\]"]', '', text.lower())
    text = re.sub(r'\s+', '-', text.strip())
    return text

def save_optimized_webp(image_bytes, target_path, max_dim=800, quality=85):
    try:
        img = Image.open(io.BytesIO(image_bytes))
        img = img.convert("RGB")
        w, h = img.size
        if max(w, h) > max_dim:
            ratio = max_dim / max(w, h)
            new_size = (int(w * ratio), int(h * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        img.save(target_path, "WEBP", quality=quality)
        return True, img.size
    except Exception as e:
        print(f"Error optimizing {target_path}: {e}")
        return False, None

def get_best_attachment(card):
    attachments = card.get("attachments", [])
    if not attachments:
        return None
    # Prefer png, webp, jpg with pose or screenshot
    images = [a for a in attachments if any(a.get("name", "").lower().endswith(ext) for ext in [".png", ".webp", ".jpg", ".jpeg"])]
    if not images:
        return None
    # If there is a pose or preview or image.webp, pick first good one
    for a in images:
        name_lower = a.get("name", "").lower()
        if "pose" in name_lower or "render" in name_lower:
            return a
    # Return first image
    return images[0]

print("Processing Stands...")
target_stand_lists = ["Stands (Arrow)", "Evolution/Quest/AU Stands"]
for c in board["cards"]:
    lname = lists.get(c["idList"], "")
    if lname in target_stand_lists:
        cname = c["name"]
        if cname in ["Rare", "Epic", "Legendary", "Mythical", "Pinnacle", "Quest", "AU (Alternative Universe)", "Evolution", "---", "How do i get a Stand?", "How do i remove my Stand?"]:
            continue
        slug = slugify(cname)
        # Check attachment
        best_att = get_best_attachment(c)
        if best_att:
            dest_file = os.path.join(out_base, "stands", f"{slug}.webp")
            if not os.path.exists(dest_file):
                try:
                    req = urllib.request.Request(best_att["url"], headers=headers)
                    with urllib.request.urlopen(req, timeout=10) as resp:
                        data = resp.read()
                        ok, size = save_optimized_webp(data, dest_file, max_dim=600, quality=85)
                        if ok:
                            print(f"  [Stand] Saved {slug}.webp ({size[0]}x{size[1]})")
                            manifest.append({
                                "file": f"/images/stands/{slug}.webp",
                                "entity": cname,
                                "type": "stand",
                                "width": size[0],
                                "height": size[1],
                                "source": "Developer Official Asset (Studio Umbra)"
                            })
                except Exception as e:
                    print(f"  [Stand] Failed {cname}: {e}")
            else:
                manifest.append({
                    "file": f"/images/stands/{slug}.webp",
                    "entity": cname,
                    "type": "stand",
                    "source": "Developer Official Asset (Studio Umbra)"
                })

print("Processing Items...")
for c in board["cards"]:
    lname = lists.get(c["idList"], "")
    if lname == "Items":
        cname = c["name"]
        slug = slugify(cname)
        best_att = get_best_attachment(c)
        if best_att:
            folder = "arrows" if "arrow" in slug else "items"
            dest_file = os.path.join(out_base, folder, f"{slug}.webp")
            if not os.path.exists(dest_file):
                try:
                    req = urllib.request.Request(best_att["url"], headers=headers)
                    with urllib.request.urlopen(req, timeout=10) as resp:
                        data = resp.read()
                        ok, size = save_optimized_webp(data, dest_file, max_dim=400, quality=85)
                        if ok:
                            print(f"  [Item] Saved {slug}.webp")
                            manifest.append({
                                "file": f"/images/{folder}/{slug}.webp",
                                "entity": cname,
                                "type": "item",
                                "source": "Developer Official Asset (Studio Umbra)"
                            })
                except Exception as e:
                    print(f"  [Item] Failed {cname}: {e}")

print("Processing Rokakaka Mutations...")
for c in board["cards"]:
    lname = lists.get(c["idList"], "")
    if lname == "Rokaka Mutations":
        cname = c["name"]
        if "What are" in cname or "----" in cname:
            continue
        slug = slugify(cname)
        best_att = get_best_attachment(c)
        if best_att:
            dest_file = os.path.join(out_base, "rokakaka", f"{slug}.webp")
            if not os.path.exists(dest_file):
                try:
                    req = urllib.request.Request(best_att["url"], headers=headers)
                    with urllib.request.urlopen(req, timeout=10) as resp:
                        data = resp.read()
                        ok, size = save_optimized_webp(data, dest_file, max_dim=400, quality=85)
                        if ok:
                            print(f"  [Roka] Saved {slug}.webp")
                            manifest.append({
                                "file": f"/images/rokakaka/{slug}.webp",
                                "entity": cname,
                                "type": "rokakaka",
                                "source": "Developer Official Asset (Studio Umbra)"
                            })
                except Exception as e:
                    print(f"  [Roka] Failed {cname}: {e}")

print("Processing Raids & Bosses...")
for c in board["cards"]:
    lname = lists.get(c["idList"], "")
    if lname in ["Raids/Bizarre Adventures", "Enemies/Bosses"]:
        cname = c["name"]
        if "----" in cname or "How do i" in cname:
            continue
        slug = slugify(cname)
        best_att = get_best_attachment(c)
        if best_att:
            dest_file = os.path.join(out_base, "bosses" if lname == "Enemies/Bosses" else "locations", f"{slug}.webp")
            folder = "bosses" if lname == "Enemies/Bosses" else "locations"
            if not os.path.exists(dest_file):
                try:
                    req = urllib.request.Request(best_att["url"], headers=headers)
                    with urllib.request.urlopen(req, timeout=10) as resp:
                        data = resp.read()
                        ok, size = save_optimized_webp(data, dest_file, max_dim=600, quality=85)
                        if ok:
                            print(f"  [{folder}] Saved {slug}.webp")
                            manifest.append({
                                "file": f"/images/{folder}/{slug}.webp",
                                "entity": cname,
                                "type": folder,
                                "source": "Developer Official Asset (Studio Umbra)"
                            })
                except Exception as e:
                    print(f"  [{folder}] Failed {cname}: {e}")

# Save manifest
os.makedirs(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\src\data", exist_ok=True)
with open(r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\src\data\asset-manifest.json", "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

print(f"\nCompleted! Total assets cataloged: {len(manifest)}")
