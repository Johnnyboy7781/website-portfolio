let hamburger = document.querySelector(".hamburger");
let hamburgerLines = document.querySelectorAll(".hamburger__line");
let heroSection = document.querySelector(".hero");
let aboutSection = document.querySelector("#about");
let navMenu = document.querySelector("nav");
let body = document.querySelector("body");
let modal = document.querySelector("#modal");
let projects = document.querySelectorAll(".project");
let projectTitles = document.querySelectorAll("#project__title");
let modalCloser = document.querySelector(".close-modal");
let tagList = document.querySelector(".modal__tags");

let siteLoadCheck = 0;

const projectArr = [
    {
        title: "Shasha",
        position: "Lead Developer",
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
            "https://github.com/Johnnyboy7781/shasha",
            "https://shielded-bayou-08776.herokuapp.com/"
        ]
    },
    {
        title: "The Tech Blog",
        position: "Full-Stack Developer",
        description: `A full stack social media site where developers can post 
            their current thoughts. This app, made with MySQL and Sequelize, defines
            relationships between user models, their posts, and their comments to give an
            immersive, social experience`,
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
            "https://github.com/Johnnyboy7781/tech-blog",
            "https://powerful-caverns-73555.herokuapp.com/"
        ]
    },
    {
        title: "Refreshr",
        position: "Full-Stack Developer",
        description: `A full stack e-commerce site for buying hypothetical energy
            drinks. Data manipulation driven by GraphQL allows users to interact
            with commerce data in meaningful ways, allowing users to favorite drinks
            as well as add them to a cart with a hypothetical Stripe integration.`,
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
            "https://github.com/Johnnyboy7781/refreshr",
            "https://mighty-reef-66523.herokuapp.com/"
        ]
    },
    {
        title: "MyCows Ultimate",
        position: "Sole Software Developer",
        description: `A mobile game app meant to be played during road trips. Players
            will call out common objects that they see and keep track of scores on the app.
            Though this app is a bit rough around the edges, it represents my first coding project.
            All code was developed by me with art assets done by my colleague. App has been deployed
            to both android and iOS. Repository is private at this time.`,
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
            "https://play.google.com/store/apps/details?id=com.sfzgames.mycowsultimate&hl=en_US&gl=US",
            "https://apps.apple.com/by/app/mycows-ultimate/id1578990284"
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
        } else if (siteLoadCheck < 2) { // TODO: Refactor, seems bruteforce-y
            siteLoadCheck++;
        } else {
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
        } else if (siteLoadCheck < 2) {
            siteLoadCheck++;
        } else {
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
    const position = document.querySelector('#modal__position');
    const links = document.querySelectorAll("#modal__link");
    const desc = document.querySelector("#modal__desc");
    const img = document.querySelector("#modal__img");
    const projectClass = e.target.className.split(" ")[1];
    const currProject = projectArr[parseInt(projectClass[1])]

    title.innerHTML = currProject.title;
    position.innerHTML = currProject.position;
    desc.innerHTML = currProject.description;
    img.style.backgroundImage = currProject.img;

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {window.open(currProject.links[i],'_blank')};
    }

    if (currProject.title === "MyCows Ultimate") {
        links[0].textContent = "Android";
        links[1].textContent = "iOS";
    } else {
        links[0].textContent = "Code";
        links[1].textContent = "Deploy";
    }

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

projectTitles.forEach(function (projectTitle) {
    projectTitle.addEventListener('click', openModal)
})

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
