import os
import re

article_dir = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/article"
scratch_dir = "/Users/nijinmuhammed/Files/Code/design-school-malayalam/scratch"

# Mappings of article IDs to their new subcategory IDs under the main category "tools"
mappings = {
    "best-design-tools": "design-utilities",
    "best-ux-tools": "ux-utilities",
    "ai-design-tools": "ai-utilities",
    "best-no-code-website-builders": "website-builders",
    "font-library-and-inspiration": "typography-fonts",
    "best-color-inspiration-tools": "color-palettes",
    "ui-web-design-inspiration-websites": "design-inspiration",
    "best-mockup-sites": "mockups-assets",
    "free-open-source-icon-libraries": "icons-illustrations",
    "free-stock-images-videos": "stock-media",
    "learn-ui-ux-design": "learning-education",
    "books-for-designers": "learning-education",
    "design-communities": "communities-jobs",
    "best-design-podcasts": "podcasts-blogs",
    "best-design-blogs-and-magazines": "podcasts-blogs",
    "productivity-tools-for-design-and-product-teams": "productivity-teams"
}

# Regex patterns to find and replace categoryId and subcategoryId
cat_pattern = re.compile(r'categoryId:\s*["\']([^"\']+)["\']')
sub_pattern = re.compile(r'subcategoryId:\s*["\']([^"\']+)["\']')

# 1. Update JS article files
js_updated = 0
for filename in os.listdir(article_dir):
    if filename.endswith(".js"):
        filepath = os.path.join(article_dir, filename)
        # Check if this article is in our mappings
        art_id = filename[:-3]
        if art_id in mappings:
            new_sub = mappings[art_id]
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                
            # Replace categoryId to "tools"
            content = cat_pattern.sub('categoryId: "tools"', content)
            # Replace subcategoryId to new_sub
            content = sub_pattern.sub(f'subcategoryId: "{new_sub}"', content)
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated category mapping in JS article: {filename} -> subcategoryId: '{new_sub}'")
            js_updated += 1

# 2. Update Python build scripts templates
py_updated = 0
for filename in os.listdir(scratch_dir):
    if filename.endswith(".py") and "build_" in filename:
        filepath = os.path.join(scratch_dir, filename)
        
        # Determine article id from build script name
        # e.g., build_design_tools_article.py -> best-design-tools
        # e.g., build_color_tools_article.py -> best-color-inspiration-tools
        # Let's map script names to article ids
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
            
        if art_id and art_id in mappings:
            new_sub = mappings[art_id]
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                
            # Replace categoryId to "tools"
            content = cat_pattern.sub('categoryId: "tools"', content)
            # Replace subcategoryId to new_sub
            content = sub_pattern.sub(f'subcategoryId: "{new_sub}"', content)
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated category template in python build script: {filename} -> subcategoryId: '{new_sub}'")
            py_updated += 1

print(f"Finished. JS files updated: {js_updated}, Python scripts updated: {py_updated}")
