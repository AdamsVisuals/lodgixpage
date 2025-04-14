// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelectorAll('.nav-links');
    navLinks.forEach(links => {
        links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelectorAll('.nav-links');
            navLinks.forEach(links => {
                if (window.getComputedStyle(links).display === 'flex') {
                    links.style.display = 'none';
                }
            });
        }
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero section floating cards animation
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
});

// Scroll indicator click handler
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#features').offsetTop - 80,
        behavior: 'smooth'
    });
});