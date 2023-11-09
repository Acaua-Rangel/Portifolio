const hamburger = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".cabecalho-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})