// Add this JavaScript code after your existing JavaScript

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

function initializeAnimations() {
    // Add animation classes to elements
    document.querySelector('.hero-content').classList.add('animate', 'fade-up');
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('animate', 'fade-up');
    });
    
    // Add animation classes to existing elements
    document.querySelectorAll('.skill-card, .testimonial-card, .footer-section').forEach(el => {
        el.classList.add('animate');
    });

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: Uncomment to observe only once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });

    // Trigger hero animation immediately
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('animate-in');
    }, 100);
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
