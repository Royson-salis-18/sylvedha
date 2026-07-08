const fs = require('fs');
let html = fs.readFileSync('public/grevara-catalog.html', 'utf8');

const injection = `
<script>
  (function() {
    function hideElements() {
      // Find all elements
      const elements = document.querySelectorAll('div, button, span, p, a, h1, h2, h3, h4, h5, h6');
      elements.forEach(el => {
        if (!el.children.length) {
          const text = el.textContent || '';
          if (text.includes('Printing Instructions') || text.includes('AI Chef')) {
            // Traverse up to find a suitable container to hide
            let current = el;
            while(current && current !== document.body) {
                // If it's a button, hide the button
                if (current.tagName === 'BUTTON') {
                    current.style.display = 'none';
                    return;
                }
                // If it's a fixed element (like the bottom right chat button), hide it
                const style = window.getComputedStyle(current);
                if (style.position === 'fixed' || style.position === 'absolute') {
                    current.style.display = 'none';
                    return;
                }
                current = current.parentElement;
            }
            
            // Fallback: just hide the element itself if it contains the exact text
            if (el.textContent.trim() === 'Printing Instructions' || el.textContent.includes('AI Chef')) {
                 el.style.display = 'none';
                 // If there's a parent div that looks like a banner, hide it too
                 if (el.parentElement && el.parentElement.tagName === 'DIV' && el.parentElement.children.length <= 3) {
                     el.parentElement.style.display = 'none';
                 }
            }
          }
        }
      });
      
      // Specifically target fixed buttons in bottom right
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
         if (btn.textContent.includes('AI Chef')) {
             btn.style.display = 'none';
         }
      });
    }

    // Run on load and periodically in case of React re-renders
    setInterval(hideElements, 500);
    window.addEventListener('DOMContentLoaded', hideElements);
  })();
</script>
`;

if (!html.includes('hideElements')) {
    html = html.replace('</head>', injection + '</head>');
    fs.writeFileSync('public/grevara-catalog.html', html, 'utf8');
    console.log('Injected script successfully.');
} else {
    console.log('Script already injected.');
}
