// Language mapping for page names
const pageMappings = {
    'home': {
        'et': '/',
        'en': '/en/index.html'
    },
    'services': {
        'et': '/teenused.html',
        'en': '/en/services.html'
    }
};

// Get current page and language from body attributes
const currentLang = document.body.dataset.lang;
const currentPage = document.body.dataset.page;

// Function to switch language while maintaining the current page
function switchLanguage() {
    const newLang = currentLang === 'et' ? 'en' : 'et';
    const targetUrl = pageMappings[currentPage][newLang];
    
    if (targetUrl) {
        window.location.href = targetUrl;
    } else {
        console.error('No mapping found for current page:', currentPage);
    }
}

// Add click event listeners to language switcher buttons
document.addEventListener('DOMContentLoaded', () => {
    const langSwitchers = document.querySelectorAll('[data-lang-switch]');
    for (const switcher of langSwitchers) {
        switcher.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage();
        });
    }

    // Update active state of language switcher buttons
    const langButtons = document.querySelectorAll('.lang-link');
    for (const button of langButtons) {
        if (button.textContent === currentLang.toUpperCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    }
});
