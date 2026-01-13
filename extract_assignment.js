// Browser Console Script to Extract Assignment Content
// Instructions: 
// 1. Open the assignment page
// 2. Press F12 to open Developer Tools
// 3. Go to the "Console" tab
// 4. Copy and paste this entire script
// 5. Press Enter
// 6. The assignment content will be displayed and copied to clipboard

(function() {
    // Function to extract text content from the page
    function extractContent() {
        // Try to find the main content area (common selectors)
        const selectors = [
            'main',
            '[role="main"]',
            '.content',
            '.assignment-content',
            '.exam-content',
            '.question-content',
            '#content',
            '.container',
            'article',
            '.main-content'
        ];
        
        let content = '';
        let element = null;
        
        // Try each selector
        for (let selector of selectors) {
            element = document.querySelector(selector);
            if (element) {
                console.log(`Found content using selector: ${selector}`);
                break;
            }
        }
        
        // If no specific content area found, use body but filter out navigation/menus
        if (!element) {
            element = document.body;
            // Remove common navigation/menu elements
            const toRemove = element.querySelectorAll('nav, header, footer, .sidebar, .menu, .navigation');
            toRemove.forEach(el => el.remove());
        }
        
        // Extract text content
        content = element.innerText || element.textContent;
        
        // Clean up the text
        content = content
            .replace(/\n{3,}/g, '\n\n')  // Remove multiple newlines
            .replace(/[ \t]+/g, ' ')      // Normalize whitespace
            .trim();
        
        return content;
    }
    
    // Extract the content
    const assignmentText = extractContent();
    
    // Display in console
    console.log('=== ASSIGNMENT CONTENT ===');
    console.log(assignmentText);
    console.log('=== END OF CONTENT ===');
    
    // Try to copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(assignmentText).then(() => {
            console.log('\n✅ Content copied to clipboard! You can now paste it anywhere.');
        }).catch(err => {
            console.log('\n⚠️ Could not copy to clipboard automatically. Please copy the text above manually.');
        });
    } else {
        // Fallback: create a textarea element to select text
        const textarea = document.createElement('textarea');
        textarea.value = assignmentText;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            console.log('\n✅ Content copied to clipboard!');
        } catch (err) {
            console.log('\n⚠️ Please manually select and copy the text above.');
        }
        document.body.removeChild(textarea);
    }
    
    // Also return the content so user can see it
    return assignmentText;
})();


