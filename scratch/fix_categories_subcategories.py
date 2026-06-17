import os
import re

article_dir = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/article"
scratch_dir = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/scratch"

# Define the category and subcategory arrays for each tools article ID
cross_links = {
    "best-design-tools": {
        "categories": ["tools", "ui-design"],
        "subcategories": ["design-utilities", "basics"]
    },
    "best-ux-tools": {
        "categories": ["tools", "ux-design"],
        "subcategories": ["ux-utilities", "prototyping"]
    },
    "ai-design-tools": {
        "categories": ["tools", "ui-design", "ux-design"],
        "subcategories": ["ai-utilities", "basics", "prototyping"]
    },
    "best-no-code-website-builders": {
        "categories": ["tools", "ui-design", "ux-design"],
        "subcategories": ["website-builders", "web-ui", "prototyping"]
    },
    "font-library-and-inspiration": {
        "categories": ["tools", "ui-design"],
        "subcategories": ["typography-fonts", "typography"]
    },
    "best-color-inspiration-tools": {
        "categories": ["tools", "ui-design"],
        "subcategories": ["color-palettes", "color-theory"]
    },
    "ui-web-design-inspiration-websites": {
        "categories": ["tools", "ui-design"],
        "subcategories": ["design-inspiration", "web-ui"]
    },
    "best-mockup-sites": {
        "categories": ["tools", "ui-design", "figma"],
        "subcategories": ["mockups-assets", "web-ui", "figma-basics"]
    },
    "free-open-source-icon-libraries": {
        "categories": ["tools", "ui-design", "figma"],
        "subcategories": ["icons-illustrations", "web-ui", "figma-basics"]
    },
    "free-stock-images-videos": {
        "categories": ["tools", "ui-design"],
        "subcategories": ["stock-media", "web-ui"]
    },
    "learn-ui-ux-design": {
        "categories": ["tools", "ui-design", "ux-design"],
        "subcategories": ["learning-education", "basics", "user-research"]
    },
    "books-for-designers": {
        "categories": ["tools", "ui-design", "ux-design"],
        "subcategories": ["learning-education", "basics", "user-research"]
    },
    "design-communities": {
        "categories": ["tools", "ui-design", "ux-design"],
        "subcategories": ["communities-jobs", "basics", "user-research"]
    },
    "best-design-podcasts": {
        "categories": ["tools", "ui-design", "ux-design"],
        "subcategories": ["podcasts-blogs", "basics", "user-research"]
    },
    "best-design-blogs-and-magazines": {
        "categories": ["tools", "ui-design", "ux-design"],
        "subcategories": ["podcasts-blogs", "basics", "user-research"]
    },
    "productivity-tools-for-design-and-product-teams": {
        "categories": ["tools", "ux-design"],
        "subcategories": ["productivity-teams", "user-research"]
    }
}

# Regex to match categoryId or subcategoryId being a string or an array
cat_pattern = re.compile(r'categoryId:\s*(?:\[[^\]]*\]|"[^"]*"|\'[^\']*\')')
sub_pattern = re.compile(r'subcategoryId:\s*(?:\[[^\]]*\]|"[^"]*"|\'[^\']*\')')

# Function to process file content and perform updates
def fix_content(content, art_id):
    if art_id not in cross_links:
        return content, False

    cats = cross_links[art_id]["categories"]
    subs = cross_links[art_id]["subcategories"]

    cats_js = "[" + ", ".join(f'"{c}"' for c in cats) + "]"
    subs_js = "[" + ", ".join(f'"{s}"' for s in subs) + "]"

    # Make replacements
    new_content = cat_pattern.sub(f'categoryId: {cats_js}', content)
    new_content = sub_pattern.sub(f'subcategoryId: {subs_js}', new_content)

    return new_content, new_content != content

# 1. Update JS article files
js_updated = 0
for filename in os.listdir(article_dir):
    if filename.endswith(".js"):
        filepath = os.path.join(article_dir, filename)
        art_id = filename[:-3]
        if art_id in cross_links:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            new_content, changed = fix_content(content, art_id)
            if changed:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated JS article: {filename}")
                js_updated += 1

# 2. Update Python build scripts templates
py_updated = 0
for filename in os.listdir(scratch_dir):
    if filename.endswith(".py") and "build_" in filename:
        filepath = os.path.join(scratch_dir, filename)
        
        art_id = None
        if "design_tools" in filename:
            art_id = "best-design-tools"
        elif "ux_tools" in filename:
            art_id = "best-ux-tools"
        elif "ai_design_tools" in filename:
            art_id = "ai-design-tools"
        elif "no_code" in filename:
            art_id = "best-no-code-website-builders"
        elif "fonts" in filename:
            art_id = "font-library-and-inspiration"
        elif "color_tools" in filename:
            art_id = "best-color-inspiration-tools"
        elif "inspiration_websites" in filename:
            art_id = "ui-web-design-inspiration-websites"
        elif "mockups" in filename or "mockup" in filename:
            art_id = "best-mockup-sites"
        elif "learn_design" in filename:
            art_id = "learn-ui-ux-design"
        elif "books" in filename:
            art_id = "books-for-designers"
        elif "design_communities" in filename:
            art_id = "design-communities"
        elif "design_podcasts" in filename:
            art_id = "best-design-podcasts"
        elif "design_blogs" in filename:
            art_id = "best-design-blogs-and-magazines"
        elif "productivity_tools" in filename:
            art_id = "productivity-tools-for-design-and-product-teams"

        if art_id and art_id in cross_links:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            new_content, changed = fix_content(content, art_id)
            if changed:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated template in build script: {filename}")
                py_updated += 1

print(f"Finished. JS files updated: {js_updated}, Python scripts updated: {py_updated}")
