var hamburger = document.querySelector(".hamburger");
var hamburgerLines = document.querySelectorAll(".hamburger__line");
var heroSection = document.querySelector(".hero");
var aboutSection = document.querySelector("#about");
var navMenu = document.querySelector("nav");
var body = document.querySelector("body");
var modal = document.querySelector("#modal");
var projects = document.querySelectorAll(".project");
var closeModal = document.querySelector(".close-modal");

const projectArr = [
    {
        title: "Shasha",
        description: "lorem shasha",
        img: "url('./assets/projects/01.jpg')"
    },
    {
        title: "The Tech Blog",
        description: "lorem tech blog",
        img: "url('./assets/projects/02.png')"
    },
    {
        title: "Refreshr",
        description: "lorem refreshr",
        img: "url('./assets/projects/03.jpg')"
    },
    {
        title: "MyCows Ultimate",
        description: "lorem mycows",
        img: "url('./assets/projects/04.png')"
    }
]

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

const openModal = e => {
    const title = document.querySelector("#modal__title");
    const desc = document.querySelector("#modal__desc");
    const img = document.querySelector("#modal__img");
    const projectClass = e.target.className.split(" ")[1];
    const projectIndex = parseInt(projectClass[1]);

    title.innerHTML = projectArr[projectIndex].title;
    desc.innerHTML = projectArr[projectIndex].description;
    img.style.backgroundImage = projectArr[projectIndex].img;

    modal.classList.add("open-modal");
}

projects.forEach(function (project) {
    project.addEventListener('click', openModal);
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
