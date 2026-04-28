function playMusic() {
    var audio = document.getElementById("music");
    var btn = document.getElementById("musicBtn");
    if (audio.paused) {
        audio.play();
        if (btn) btn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
    } else {
        audio.pause();
        if (btn) btn.innerHTML = '<i class="fas fa-play"></i> Play Music';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .hero-text, .hero-image-wrap, .abt, .card1, .card2, .card3, .contact-container, #cn, .contact-main h2, .profile-card, .profile-text');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
