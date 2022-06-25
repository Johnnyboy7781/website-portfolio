var hamburger = document.querySelector(".hamburger");
var hamburgerLines = document.querySelectorAll(".hamburger__line");
var heroSection = document.querySelector(".hero");
var aboutSection = document.querySelector("#about");
var navMenu = document.querySelector("nav");
var body = document.querySelector("body");
var options = {
    rootMargin: "-40px 0px 0px 0px"
};
var heroSectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            [].forEach.call(hamburgerLines, function (el) {
                el.classList.add("backing");
            });
        }
        else {
            [].forEach.call(hamburgerLines, function (el) {
                el.classList.remove("backing");
            });
        }
    });
}, options);
var aboutSectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            [].forEach.call(hamburgerLines, function (el) {
                el.classList.remove("backing");
            });
        }
        else {
            [].forEach.call(hamburgerLines, function (el) {
                el.classList.add("backing");
            });
        }
    });
});
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
heroSectionObserver.observe(heroSection);
aboutSectionObserver.observe(aboutSection);
hamburger.addEventListener('click', menuToggle);
navMenu.addEventListener('click', menuToggle);
