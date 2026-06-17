import re

file_path = "/Users/nijinmuhammed/.gemini/antigravity-ide/brain/597dd776-058f-4914-8acf-a66e9c2f6080/.system_generated/steps/615/content.md"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

matches = re.findall(r'id="([^"]+)"\s+class="anchor-section[^"]*"', html)
print("Anchor sections:")
for m in matches:
    print(f"- {m}")
