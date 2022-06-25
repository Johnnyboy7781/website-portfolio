const hamburger = document.querySelector(".hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger__line")
const heroSection = document.querySelector(".hero");
const aboutSection = document.querySelector("#about");
const navMenu = document.querySelector("nav");
const body = document.querySelector("body");

const options = {
    rootMargin: "-40px 0px 0px 0px"
};

const heroSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            [].forEach.call(hamburgerLines, el => {
                el.classList.add("backing")
            })
        } else {
            [].forEach.call(hamburgerLines, el => {
                el.classList.remove("backing")
            })
        }
    })
}, options);

const aboutSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            [].forEach.call(hamburgerLines, el => {
                el.classList.remove("backing")
            })
        } else {
            [].forEach.call(hamburgerLines, el => {
                el.classList.add("backing")
            })
        }
    })
})

const closeMenuIfOpen = e => {
    if (e.target.parentElement.className !== ("hamburger__container" && "header")) {
        if (navMenu.classList.contains("open")) {
            navMenu.className = "";
        }
    }
}
const menuToggle = () => {
    if (navMenu.classList.contains("open")) {
        navMenu.className = "";
    } else {
        navMenu.className = "open";
    }
}

heroSectionObserver.observe(heroSection);
aboutSectionObserver.observe(aboutSection);

hamburger.addEventListener('click', menuToggle);
navMenu.addEventListener('click', menuToggle);