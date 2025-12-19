// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get the page ID from data attribute
        const pageId = link.getAttribute('data-page');
        
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        
        // Show the selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }
        
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Allow button clicks to navigate
document.querySelectorAll('[data-page]').forEach(element => {
    if (!element.classList.contains('nav-link')) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            
            const pageId = element.getAttribute('data-page');
            const navLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
            
            if (navLink) {
                navLink.click();
            }
        });
    }
});

