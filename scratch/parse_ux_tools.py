import re
import json

file_path = "/Users/nijinmuhammed/.gemini/antigravity-ide/brain/597dd776-058f-4914-8acf-a66e9c2f6080/.system_generated/steps/341/content.md"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

section_mapping = {
    "ux-research": "UX Research",
    "flows-charts-diagrams": "Flows, Charts & Diagrams",
    "wireframing-tools": "Wireframing",
    "prototyping-tools": "Prototyping",
    "ux-collaboration-workshops": "UX Collaboration & Workshops",
    "user-testing-feedback": "User Testing & Feedback",
    "behavior-analytics": "Behavior Analytics",
    "ux-copy-dummy-content": "UX Copy & Dummy Content"
}

section_positions = []
for sec_id in section_mapping.keys():
    pattern = re.compile(rf'id="{sec_id}"\s+class="anchor-section"')
    match = pattern.search(html)
    if match:
        section_positions.append((match.start(), sec_id))

section_positions.sort()

categories = {}

for i in range(len(section_positions)):
    start_pos, sec_id = section_positions[i]
    if i < len(section_positions) - 1:
        end_pos = section_positions[i+1][0]
        section_html = html[start_pos:end_pos]
    else:
        footer_match = re.search(r'<footer', html[start_pos:])
        if footer_match:
            end_pos = start_pos + footer_match.start()
            section_html = html[start_pos:end_pos]
        else:
            section_html = html[start_pos:]
            
    categories[sec_id] = []
    
    # Extract links
    cards = section_html.split('<a href="')
    for card in cards[1:]:
        link_match = re.match(r'^([^"]+)"', card)
        if link_match:
            link = link_match.group(1)
            # Skip non-resource links
            if "toools.design" in link and not any(x in link for x in ["framer.link", "figma.com"]):
                if not any(x in link for x in ["/finder", "/blog", "/deals", "/newsletter"]):
                    pass
                else:
                    continue
            if link.startswith("#") or link.startswith("javascript:"):
                continue
                
            title_match = re.search(r'<h3 class="headline_3">([^<]+)</h3>', card)
            desc_match = re.search(r'<p class="resources_description">([^<]+)</p>', card)
            price_match = re.search(r'pricing-tag[^>]*>\s*<div[^>]*>([^<]+)</div>', card, re.DOTALL)
            if not price_match:
                price_match = re.search(r'pricing-tag[^>]*>([^<]+)</div>', card)
                
            title = title_match.group(1).strip() if title_match else ""
            desc = desc_match.group(1).strip() if desc_match else ""
            price = price_match.group(1).strip() if price_match else "Free"
            
            price = re.sub(r'<[^>]+>', '', price).strip()
            
            if title:
                title = title.replace("&amp;", "&").replace("&#x27;", "'").replace("&#039;", "'").replace("\u2122", "").replace("&quot;", '"')
                desc = desc.replace("&amp;", "&").replace("&#x27;", "'").replace("&#039;", "'").replace("&quot;", '"').replace("\u00a0", " ")
                
                # Clean up any trailing space or comma
                desc = re.sub(r'\s+', ' ', desc).strip()
                title = re.sub(r'\s+', ' ', title).strip()
                
                categories[sec_id].append({
                    "title": title,
                    "link": link,
                    "desc": desc,
                    "price": price
                })

output_file = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/scratch/ux_tools_by_category.json"
with open(output_file, "w", encoding="utf-8") as out:
    json.dump(categories, out, indent=2)

print("Parsed sections:")
for k, v in categories.items():
    print(f"- {k} ({section_mapping[k]}): {len(v)} items")
