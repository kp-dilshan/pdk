// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking
        navLinks.classList.remove('active');
    });
});

// Typing Effect
const text = "P.D Kariyawasam";
const typingText = document.querySelector('.typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(type, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', type);

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Scroll Reveal Animation
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.skill-card, .project-card');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
});