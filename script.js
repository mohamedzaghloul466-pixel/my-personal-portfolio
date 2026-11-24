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

// Contact Button
const contactButton = document.querySelector("#contact .btn");

if (contactButton) {
    contactButton.addEventListener("click", function() {
        console.log("Thank you for visiting my portfolio!");
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
                modalImage.src = link.href;
                modal.style.display = "flex";
            }
        });
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
}

console.log("JavaScript is working!");