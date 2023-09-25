const hamMenu = document.querySelector(".ham__menu");
const btn = document.querySelector("#btnHamburger");

btn.addEventListener("click", () => {
    hamMenu.classList.remove("ham__menu--open")
});
