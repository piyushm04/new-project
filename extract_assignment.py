"""
Python script to extract assignment content from a saved HTML file.

Instructions:
1. On the assignment page, press Ctrl+S (or File > Save As)
2. Save the page as "assignment_page.html" in this folder
3. Install BeautifulSoup if needed: pip install beautifulsoup4
4. Run this script: python extract_assignment.py
5. The extracted content will be saved to "assignment_content.txt"
"""

import re
import sys
import os

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("❌ BeautifulSoup4 not found!")
    print("Please install it using: pip install beautifulsoup4")
    sys.exit(1)

def extract_content_from_html(html_file):
    """Extract text content from HTML file"""
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
    except FileNotFoundError:
        print(f"❌ Error: File '{html_file}' not found.")
        print("Please save the assignment page as HTML first (Ctrl+S on the page)")
        return None
    except Exception as e:
        print(f"❌ Error reading file: {e}")
        return None
    
    # Parse HTML
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Remove script and style elements
    for script in soup(["script", "style", "nav", "header", "footer"]):
        script.decompose()
    
    # Try to find main content area
    main_content = None
    selectors = [
        soup.find('main'),
        soup.find(attrs={'role': 'main'}),
        soup.find(class_=re.compile('content', re.I)),
        soup.find(class_=re.compile('assignment', re.I)),
        soup.find(class_=re.compile('exam', re.I)),
        soup.find(class_=re.compile('question', re.I)),
        soup.find('article'),
        soup.find('body')
    ]
    
    for element in selectors:
        if element:
            main_content = element
            break
    
    if not main_content:
        main_content = soup.body if soup.body else soup
    
    # Extract text
    text = main_content.get_text(separator='\n', strip=True)
    
    # Clean up text
    text = re.sub(r'\n{3,}', '\n\n', text)  # Remove multiple newlines
    text = re.sub(r'[ \t]+', ' ', text)      # Normalize whitespace
    text = text.strip()
    
    return text

def main():
    html_file = 'assignment_page.html'
    output_file = 'assignment_content.txt'
    
    print(f"📄 Extracting content from: {html_file}")
    
    content = extract_content_from_html(html_file)
    
    if content:
        # Save to file
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Content extracted successfully!")
            print(f"📝 Saved to: {output_file}")
            print(f"\n{'='*60}")
            print("EXTRACTED CONTENT:")
            print('='*60)
            print(content[:1000])  # Print first 1000 characters
            if len(content) > 1000:
                print(f"\n... (content truncated, see {output_file} for full text)")
            print('='*60)
        except Exception as e:
            print(f"❌ Error saving file: {e}")
    else:
        print("\n💡 Tip: Make sure you saved the HTML file correctly.")

if __name__ == '__main__':
    main()

