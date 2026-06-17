import re
import json

file_path = "/Users/nijinmuhammed/.gemini/antigravity-ide/brain/597dd776-058f-4914-8acf-a66e9c2f6080/.system_generated/steps/146/content.md"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# We map IDs to their visual categories
section_mapping = {
    "free-stock-photos": "Free Stock Images & Photos",
    "ai-generated-stock": "AI Stock Photos & Videos",
    "free-stock-videos": "Free Stock Videos",
    "high-quality-stock": "Premium Stock Images & Videos",
    "stock-sound-music": "Stock Sound & Music",
    "user-images-faces-avatars": "User Images, Faces & Avatars"
}

# Find all indices of sections
section_positions = []
for sec_id in section_mapping.keys():
    # Find position of '<div id="sec_id" class="anchor-section"' or similar
    # e.g., id="free-stock-photos" class="anchor-section"
    # We can use regex to find it
    pattern = re.compile(rf'id="{sec_id}"\s+class="anchor-section"')
    match = pattern.search(html)
    if match:
        section_positions.append((match.start(), sec_id))

# Sort positions by start index
section_positions.sort()

categories = {}

for i in range(len(section_positions)):
    start_pos, sec_id = section_positions[i]
    if i < len(section_positions) - 1:
        end_pos = section_positions[i+1][0]
        section_html = html[start_pos:end_pos]
    else:
        # last section goes to footer or end
        footer_match = re.search(r'<footer', html[start_pos:])
        if footer_match:
            end_pos = start_pos + footer_match.start()
            section_html = html[start_pos:end_pos]
        else:
            section_html = html[start_pos:]
            
    categories[sec_id] = []
    
    # Extract all cards in this section
    cards = section_html.split('<a href="')
    for card in cards[1:]:
        link_match = re.match(r'^([^"]+)"', card)
        if link_match:
            link = link_match.group(1)
            title_match = re.search(r'<h3 class="headline_3">([^<]+)</h3>', card)
            desc_match = re.search(r'<p class="resources_description">([^<]+)</p>', card)
            price_match = re.search(r'pricing-tag[^>]*>\s*<div[^>]*>([^<]+)</div>', card, re.DOTALL)
            if not price_match:
                price_match = re.search(r'pricing-tag[^>]*>([^<]+)</div>', card)
                
            title = title_match.group(1).strip() if title_match else ""
            desc = desc_match.group(1).strip() if desc_match else ""
            price = price_match.group(1).strip() if price_match else ""
            
            price = re.sub(r'<[^>]+>', '', price).strip()
            
            if title:
                title = title.replace("&amp;", "&").replace("&#x27;", "'").replace("&#039;", "'").replace("\u2122", "")
                desc = desc.replace("&amp;", "&").replace("&#x27;", "'").replace("&#039;", "'").replace("&quot;", '"').replace("\u00a0", " ")
                categories[sec_id].append({
                    "title": title,
                    "link": link,
                    "desc": desc,
                    "price": price
                })

output_file = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/scratch/stock_by_category.json"
with open(output_file, "w", encoding="utf-8") as out:
    json.dump(categories, out, indent=2)

print("Parsed sections:")
for k, v in categories.items():
    print(f"- {k} ({section_mapping[k]}): {len(v)} items")
