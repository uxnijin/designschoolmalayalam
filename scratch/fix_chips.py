import os
import re

article_dir = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/article"
scratch_dir = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/scratch"

# 1. Update JS article files
target_span_pattern = r'color:\s*\${badgeColor};\s*background:\s*\${bgOpacity};\s*padding:\s*3px\s*8px;\s*border-radius:\s*6px;\s*text-transform:\s*uppercase;\s*letter-spacing:\s*0\.03em;'
replacement_span = 'color: #FFFFFF; background: ${badgeColor}; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; letter-spacing: 0.03em;'

js_updated = 0
for filename in os.listdir(article_dir):
    if filename.endswith(".js"):
        filepath = os.path.join(article_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        new_content, count = re.subn(target_span_pattern, replacement_span, content)
        if count > 0:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated badges in JS file: {filename} ({count} occurrences)")
            js_updated += 1

# 2. Update Python build scripts templates
py_updated = 0
for filename in os.listdir(scratch_dir):
    if filename.endswith(".py") and "build_" in filename:
        filepath = os.path.join(scratch_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Match template in python string
        new_content, count = re.subn(target_span_pattern, replacement_span, content)
        if count > 0:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated template in python build script: {filename} ({count} occurrences)")
            py_updated += 1

print(f"Finished. JS files updated: {js_updated}, Python scripts updated: {py_updated}")
