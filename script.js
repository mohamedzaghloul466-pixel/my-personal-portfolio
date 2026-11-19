// lcome Message
console.log("Welcome to Mohamed's Portfolio!");

// Navigation Links
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("You clicked: " + link.textContent);

    });

});

// View My Work Button
const workButton = document.querySelector(".hero .btn");

workButton.addEventListener("click", function() {

    console.log("Welcome to my projects!");

});

// Contact Message
const contactButton = document.querySelector("#contact .btn");

contactButton.addEventListener("click", function() {

    console.log("Thank you for visiting my portfolio!");

});
console.log("JavaScript is working!");
const galleryLinks = document.querySelectorAll(".design-gallery a");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".close-modal");

galleryLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const image = link.querySelector("img");
        modalImage.src = image.src;
        modal.style.display = "flex";
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

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".design-gallery a");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeButton = document.querySelector(".close-modal");

    images.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const image = link.querySelector("img");
            modalImage.src = image.src;
            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

});