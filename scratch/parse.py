import re
import json

file_path = "/Users/nijinmuhammed/.gemini/antigravity-ide/brain/597dd776-058f-4914-8acf-a66e9c2f6080/.system_generated/steps/113/content.md"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

results = []
chunks = html.split('<a href="')
for chunk in chunks[1:]:
    link_match = re.match(r'^([^"]+)"[^>]*class="[^"]*resources-card', chunk)
    if not link_match:
        link_match = re.match(r'^([^"]+)"', chunk)
    if link_match:
        link = link_match.group(1)
        title_match = re.search(r'<h3 class="headline_3">([^<]+)</h3>', chunk)
        desc_match = re.search(r'<p class="resources_description">([^<]+)</p>', chunk)
        price_match = re.search(r'pricing-tag[^>]*>\s*<div[^>]*>([^<]+)</div>', chunk, re.DOTALL)
        if not price_match:
            price_match = re.search(r'pricing-tag[^>]*>([^<]+)</div>', chunk)
            
        title = title_match.group(1).strip() if title_match else ""
        desc = desc_match.group(1).strip() if desc_match else ""
        price = price_match.group(1).strip() if price_match else ""
        
        price = re.sub(r'<[^>]+>', '', price).strip()
        
        if title:
            # Simple cleanups
            title = title.replace("&amp;", "&").replace("&#x27;", "'").replace("&#039;", "'").replace("\u2122", "")
            desc = desc.replace("&amp;", "&").replace("&#x27;", "'").replace("&#039;", "'").replace("&quot;", '"')
            results.append({
                "title": title,
                "link": link,
                "desc": desc,
                "price": price
            })

# Write to file to prevent truncation
output_file = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/scratch/mockups.json"
with open(output_file, "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)

print(f"Successfully saved {len(results)} items to {output_file}")
