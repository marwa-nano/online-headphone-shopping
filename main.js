const navToggle = document.querySelector(".mobile-nav-toggle");
const mainMenu = document.querySelector(".main-nav");
const mainHeader = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("open-nav");
  mainHeader.classList.toggle("open-header");
});
