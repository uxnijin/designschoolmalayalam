import re
import json

file_path = "/Users/nijinmuhammed/.gemini/antigravity-ide/brain/597dd776-058f-4914-8acf-a66e9c2f6080/.system_generated/steps/251/content.md"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

section_mapping = {
    "gen-ai-design": "Prompt Engineering & Gen AI",
    "branding-logo-identity-design": "Brand, Logo & Identity Design",
    "visual-graphic-design": "Visual & Graphic Design",
    "ui-digital-product-design": "UI & Digital Product Design",
    "ux-design-behavior-psychology": "UX, Behavior & Psychology",
    "web-design": "Web Design",
    "creativity-ideation-design-thinking": "Creativity, Ideation & Design Thinking",
    "drawing-illustration": "Drawing & Illustration",
    "motion-storytelling": "Motion & Storytelling",
    "marketing-personal-branding": "Marketing & Personal Branding",
    "advertising-copywriting-communication-design": "Advertising & Copywriting",
    "ethical-inclusive-sustainable-design": "Ethical, Inclusive & Sustainable Design"
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
    
    # Each book is contained in an anchor link `<a href="..." target="_blank" class="card_global books-card w-inline-block">`
    # or general `<a href="..."`
    cards = section_html.split('<a href="')
    for card in cards[1:]:
        link_match = re.match(r'^([^"]+)"', card)
        if link_match:
            link = link_match.group(1)
            # Skip non-book links (e.g. crosslinks or newsletter forms)
            if "amzn.to" not in link and "amazon.com" not in link:
                continue
                
            title_match = re.search(r'<h3 class="headline_3">([^<]+)</h3>', card)
            desc_match = re.search(r'<p class="resources_description">([^<]+)</p>', card)
            price_match = re.search(r'pricing-tag[^>]*>\s*<div[^>]*>([^<]+)</div>', card, re.DOTALL)
            if not price_match:
                price_match = re.search(r'pricing-tag[^>]*>([^<]+)</div>', card)
                
            title = title_match.group(1).strip() if title_match else ""
            desc = desc_match.group(1).strip() if desc_match else ""
            price = price_match.group(1).strip() if price_match else "Paid" # Default to Paid for books
            
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
                    "desc": desc, # Author
                    "price": price
                })

output_file = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/scratch/books_by_category.json"
with open(output_file, "w", encoding="utf-8") as out:
    json.dump(categories, out, indent=2)

print("Parsed sections:")
for k, v in categories.items():
    print(f"- {k} ({section_mapping[k]}): {len(v)} items")
