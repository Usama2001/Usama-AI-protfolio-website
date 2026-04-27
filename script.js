// Theme toggle for dark/light mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load theme preference from local storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    if (isDark) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Mobile nav toggle for smaller screens
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

// Add click event to logo on mobile to toggle nav
logo.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.toggle('active');
    }
});