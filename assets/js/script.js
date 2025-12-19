// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked (but allow navigation)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close mobile menu
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        // Let the link navigate normally - don't prevent default
    });
});

