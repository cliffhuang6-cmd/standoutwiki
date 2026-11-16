import json
import os

stands_file = r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\src\data\stands.ts"
stands_dir = r"C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\public\images\stands"

with open(stands_file, "r", encoding="utf-8") as f:
    content = f.read()

# Extract json
start = content.find('[')
end = content.rfind(']') + 1
stands_data = json.loads(content[start:end])

files = set(os.listdir(stands_dir))

updated = 0
for s in stands_data:
    current_img = s.get("image", "").split("/")[-1]
    if current_img not in files:
        # try find match
        slug = s["slug"]
        for f in files:
            if slug in f or f.replace('.webp', '') in slug:
                s["image"] = f"/images/stands/{f}"
                updated += 1
                break

with open(stands_file, "w", encoding="utf-8") as f:
    f.write('import type { Stand } from "../types";\n\n')
    f.write('export const stands: Stand[] = ' + json.dumps(stands_data, indent=2) + ';\n\n')
    f.write('export const standsBySlug = Object.fromEntries(stands.map(s => [s.slug, s]));\n')

print(f"Verified stands image paths. Updated {updated} mappings. Total stands: {len(stands_data)}")
