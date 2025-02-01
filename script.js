document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    /* Reveal Animation on Scroll */
    const elements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});
