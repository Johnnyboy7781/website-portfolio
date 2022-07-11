var hamburger = document.querySelector(".hamburger");
var hamburgerLines = document.querySelectorAll(".hamburger__line");
var heroSection = document.querySelector(".hero");
var aboutSection = document.querySelector("#about");
var navMenu = document.querySelector("nav");
var body = document.querySelector("body");
var modal = document.querySelector("#modal");
var projects = document.querySelectorAll(".project");
var modalCloser = document.querySelector(".close-modal");
var tagList = document.querySelector(".modal__tags");

const projectArr = [
    {
        title: "Shasha",
        description: `A full stack chat bot that uses a natural language processor 
            to parse human-readable text and provide an appropriate response.
            The bot can respond to basic speech as well as some therapy-related 
            topics.`,
        img: "url('./assets/projects/01.jpg')",
        tags: [
            "node",
            "javascript",
            "mysql",
            "sequelize",
            "node-nlp",
            "express",
            "handlebars",
            "heroku"
        ],
        links: [

        ]
    },
    {
        title: "The Tech Blog",
        description: "lorem tech blog",
        img: "url('./assets/projects/02.png')",
        tags: [
            "node",
            "javascript",
            "mysql",
            "sequelize",
            "express",
            "handlebars"
        ],
        links: [

        ]
    },
    {
        title: "Refreshr",
        description: "lorem refreshr",
        img: "url('./assets/projects/03.jpg')",
        tags: [
            "node",
            "javascript",
            "mongodb",
            "mongoose",
            "graphql",
            "express",
            "styled-components",
            "react",
            "MERN"
        ],
        links: [

        ]
    },
    {
        title: "MyCows Ultimate",
        description: "lorem mycows",
        img: "url('./assets/projects/04.png')",
        tags: [
            "javascript",
            "react-native",
            "native-base",
            "expo",
            "android",
            "iOS",
            "first-project"
        ],
        links: [
            
        ]
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
    const currProject = projectArr[parseInt(projectClass[1])]

    title.innerHTML = currProject.title;
    desc.innerHTML = currProject.description;
    img.style.backgroundImage = currProject.img;

    for (let i = 0; i < currProject.tags.length; i++) {
        const tag = document.createElement("li");
        tag.innerHTML = currProject.tags[i];
        tag.className = "project-tag"
        tagList.appendChild(tag);
    }

    modal.classList.add("open-modal");
}

const closeModal = () => {
    modal.classList.remove("open-modal");
    tagList.innerHTML = "";
}

projects.forEach(function (project) {
    project.addEventListener('click', openModal);
});

modal.addEventListener("click", function (e) {
    if (e.target.className !== "modal open-modal") {
        return;
    }
    closeModal();
});

modalCloser.addEventListener("click", function () {
    closeModal();
});

heroSectionObserver.observe(heroSection);
aboutSectionObserver.observe(aboutSection);
hamburger.addEventListener('click', menuToggle);
navMenu.addEventListener('click', menuToggle);
