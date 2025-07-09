const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let isAnimating = false;

menuBtn.addEventListener("click", () => {
    if (isAnimating) return;

    if (navLinks.classList.contains("active")) {
        isAnimating = true;
        navLinks.classList.add("closing");

        setTimeout(() => {
            navLinks.classList.remove("active", "closing");
            isAnimating = false;
        }, 500);
    } else {
        isAnimating = true;
        navLinks.classList.add("active");
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    menuBtn.classList.toggle("open");
});

const navLinkArray = document.querySelectorAll('.nav-links a');

navLinkArray.forEach(navLink => {
    navLink.addEventListener("click", () => {
        isAnimating = true;
        navLinks.classList.add("closing");

        setTimeout(() => {
            navLinks.classList.remove("active", "closing");
            isAnimating = false;
        }, 500);
        
        menuBtn.classList.toggle("open");
    });
});
