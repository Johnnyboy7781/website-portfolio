var hamburger = document.querySelector(".hamburger");
var hamburgerLines = document.querySelectorAll(".hamburger__line");
var heroSection = document.querySelector(".hero");
var aboutSection = document.querySelector("#about");
var navMenu = document.querySelector("nav");
var body = document.querySelector("body");
var modal = document.querySelector("#modal");
var projects = document.querySelectorAll(".project");
var closeModal = document.querySelector(".close-modal");

// Intersection Observer

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

// Menu toggle

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

// Modal

projects.forEach(function (project) {
    project.addEventListener('click', function () {
        modal.classList.add("open-modal");
    });
});

modal.addEventListener("click", function (e) {
    if (e.target.className !== "modal open-modal") {
        return;
    }
    modal.classList.remove("open-modal");
});

closeModal.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});

heroSectionObserver.observe(heroSection);
aboutSectionObserver.observe(aboutSection);
hamburger.addEventListener('click', menuToggle);
navMenu.addEventListener('click', menuToggle);
