// Welcome Message
console.log("Welcome to Mohamed's Portfolio!");

// Navigation Links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.textContent);
    });
});

// View My Work Button
const workButton = document.querySelector(".hero .btn");

if (workButton) {
    workButton.addEventListener("click", function() {
        console.log("Welcome to my projects!");
    });
}

// Image Gallery
const galleryLinks = document.querySelectorAll(".design-gallery a");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".close-modal");

if (modal && modalImage && closeButton) {

    galleryLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const image = link.querySelector("img");

            if (image) {
                modalImage.src = image.src;
                modal.style.display = "flex";
            }
        });
    });

    function closeModal() {
        modal.style.display = "none";
    }

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}

// JavaScript Status
console.log("JavaScript is working!");

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".section, .project-card, .card"
);

if ("IntersectionObserver" in window) {

    revealElements.forEach(function(element) {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }

        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(function(element) {
        revealObserver.observe(element);
    });

} else {
    revealElements.forEach(function(element) {
        element.classList.add("active");
    });
}