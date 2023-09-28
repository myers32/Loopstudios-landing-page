const hamMenu = document.querySelector(".ham__menu");
const btnOpen = document.querySelector("#btnHamburger");
const btnClose = document.querySelector("#buttonHamburger");
const body = document.querySelector("body");
const overlay = document.querySelector(".ham__menu--overlay");

btnOpen.addEventListener("click", () => {
    hamMenu.classList.remove("ham__menu--overlay");
    body.classList.add("noScroll");
});

btnClose.addEventListener("click", () => {
    hamMenu.classList.add("ham__menu--overlay");
    body.classList.remove("noScroll");
});