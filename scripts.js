var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector("nav");
var body = document.querySelector("body");
var closeMenuIfOpen = function (e) {
    if (e.target.parentElement.className !== ("hamburger__container" && "header")) {
        if (navMenu.classList.contains("open")) {
            navMenu.className = "";
        }
    }
};
var menuToggle = function () {
    if (navMenu.classList.contains("open")) {
        navMenu.className = "";
    }
    else {
        navMenu.className = "open";
    }
};
// body.addEventListener('click', closeMenuIfOpen);
hamburger.addEventListener('click', menuToggle);
navMenu.addEventListener('click', menuToggle);
