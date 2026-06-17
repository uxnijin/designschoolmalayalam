import os
import re

dir_path = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/article"
files = [f for f in os.listdir(dir_path) if f.endswith(".js")]

missing_headings = []
for file in files:
    with open(os.path.join(dir_path, file), "r", encoding="utf-8") as f:
        content = f.read()
    # Check for h2 or h3 with optional attributes
    if not re.search(r'<h([23])\b[^>]*>', content):
        missing_headings.append(file)

print(f"Total articles: {len(files)}")
print(f"Articles missing h2 or h3 headings: {len(missing_headings)}")
for f in missing_headings:
    print(f)
