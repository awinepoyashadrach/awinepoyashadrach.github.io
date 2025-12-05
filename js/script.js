// Smooth Scroll Animation for internal section links (same-page anchors)
const links = document.querySelectorAll('.nav-links a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight the active page in the navbar
const currentLocation = window.location.href;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    if (link.href === currentLocation || link.href === currentLocation.split('#')[0]) {
        link.classList.add('active');
    }
});

// Fade-in animation for sections when they scroll into view
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('hidden'); // initial state
    sectionObserver.observe(section);
});
