import zipfile
import os
import shutil

zip_path = r'C:\Users\chaofan\.gemini\antigravity\brain\2487a01e-adf1-44ef-9647-c546241eac8c\.user_uploaded\media_1794806916986_81741d86.zip'
public_dir = r'C:\Users\chaofan\.gemini\antigravity\scratch\stand-out-wiki\public'

os.makedirs(os.path.join(public_dir, 'images', 'brand'), exist_ok=True)

with zipfile.ZipFile(zip_path, 'r') as z:
    file_map = {
        'standoutwiki-brand-assets/assets/logo-960.webp': os.path.join(public_dir, 'images', 'brand', 'stand-out-wiki-logo.webp'),
        'standoutwiki-brand-assets/assets/logo-full.png': os.path.join(public_dir, 'images', 'brand', 'stand-out-wiki-logo.png'),
        'standoutwiki-brand-assets/assets/icon-512.png': os.path.join(public_dir, 'images', 'brand', 'stand-out-wiki-icon.png'),
        'standoutwiki-brand-assets/assets/favicon.ico': os.path.join(public_dir, 'favicon.ico'),
        'standoutwiki-brand-assets/assets/icon-32.png': os.path.join(public_dir, 'favicon-32x32.png'),
        'standoutwiki-brand-assets/assets/icon-192.png': os.path.join(public_dir, 'icon-192.png'),
        'standoutwiki-brand-assets/assets/icon-512.png': os.path.join(public_dir, 'icon-512.png'),
        'standoutwiki-brand-assets/assets/apple-touch-icon.png': os.path.join(public_dir, 'apple-touch-icon.png'),
        'standoutwiki-brand-assets/assets/og-image.png': os.path.join(public_dir, 'og-image.png'),
        'standoutwiki-brand-assets/assets/og-image.webp': os.path.join(public_dir, 'og-image.webp'),
        'standoutwiki-brand-assets/site.webmanifest.example': os.path.join(public_dir, 'site.webmanifest'),
    }

    for src_in_zip, dest in file_map.items():
        data = z.read(src_in_zip)
        with open(dest, 'wb') as f:
            f.write(data)
        print(f"Extracted -> {dest} ({len(data)} bytes)")

print("\nSuccessfully integrated all brand assets!")
