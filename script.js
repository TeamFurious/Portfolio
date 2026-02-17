const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// 1. Check for saved user preference, if any, on load
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.className = savedTheme;
    updateIcon(savedTheme);
}

// 2. The Toggle Function
function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        // Switch to Light Mode
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        updateIcon('light-mode');
    } else {
        // Switch to Dark Mode
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateIcon('dark-mode');
    }
}

// 3. Update the icon based on the mode
function updateIcon(theme) {
    if (theme === 'dark-mode') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Add click listener to the button
themeToggle.addEventListener('click', toggleTheme);
