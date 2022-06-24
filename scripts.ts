const hamburger = document.querySelector(".hamburger__container");
const navMenu = document.querySelector("nav");
const body = document.querySelector("body");

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


body.addEventListener('click', closeMenuIfOpen);
hamburger.addEventListener('click', menuToggle);