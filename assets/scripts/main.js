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



// Logo Proposal - Navbar Logo Toggle Feature
document.addEventListener("DOMContentLoaded", () => {
    const navbarLogo = document.getElementById('navbar-logo');
    const pictures = document.querySelectorAll('.logo-card img');

    // Add click event listener to each image in the logo card
    pictures.forEach(picture => {
        picture.addEventListener('click', () => {
            if (picture.src) {
                navbarLogo.src = picture.src;
            }

            // Remove active class from all images
            pictures.forEach(img => img.classList.remove('active'));

            // Add active class to the clicked image
            picture.classList.add('active');
        });
    });
});