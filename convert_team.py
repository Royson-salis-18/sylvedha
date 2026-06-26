import os
from PIL import Image

workspace = r'd:\Users\royso\Desktop\sylvedha landing page'
dest_dir = os.path.join(workspace, 'public', 'images')

mappings = {
    'royson (2).jpeg': 'team-royson.webp',
    'sharath (2).jpeg': 'team-sharath.webp',
    'prakash (2).jpeg': 'team-prakash.webp'
}

for src_name, dest_name in mappings.items():
    src_path = os.path.join(workspace, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            with Image.open(src_path) as img:
                img.save(dest_path, 'WEBP', quality=85)
            print(f"Successfully converted {src_name} -> {dest_name}")
            # delete original to clean up workspace root
            os.remove(src_path)
        except Exception as e:
            print(f"Error converting {src_name}: {e}")
    else:
        print(f"Source file not found: {src_path}")
