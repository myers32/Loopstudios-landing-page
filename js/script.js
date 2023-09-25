const hamMenu = document.querySelector(".ham__menu");
const btnOpen = document.querySelector("#btnHamburger");
const btnClose = document.querySelector("#buttonHamburger");
const body = document.querySelector("body");

btnOpen.addEventListener("click", () => {
    hamMenu.classList.remove("ham__menu--open");
    body.classList.add("noScroll");
});

btnClose.addEventListener("click", () => {
    hamMenu.classList.add("ham__menu--open");
    body.classList.remove("noScroll");
});