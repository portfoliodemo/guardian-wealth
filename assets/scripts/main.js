document.addEventListener("scroll", function() {
    const fadeIns = document.querySelectorAll('.fade-in');
    
    fadeIns.forEach(fadeIn => {
        const rect = fadeIn.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight - 100) {  // Trigger fade-in slightly before the element is fully in view
            fadeIn.classList.add('show');
        }
    });
});