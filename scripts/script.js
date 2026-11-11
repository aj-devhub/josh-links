// Select the button and the root HTML element
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 1. Check for saved theme in Local Storage on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️'; // Show Sun if it's dark mode
} else {
    // Default to light mode
    htmlElement.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙'; // Show Moon if it's light mode
}

// 2. Add click event listener to the toggle button
themeToggleBtn.addEventListener('click', () => {
    // Check current theme
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        // Switch to Light Mode
        htmlElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        // Switch to Dark Mode
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // Save preference
    }
});