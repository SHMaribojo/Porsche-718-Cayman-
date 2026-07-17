const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once it reveals, we can stop tracking it
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 
});

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});