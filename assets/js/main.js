const navMenu = document.querySelector(".nav-menu");
const navToggle = document.getElementById("nav__toggle");
const navclose = document.getElementById("nav__close");
const navLinks = document.querySelectorAll(".nav-link");
/*=============== SHOW MENU ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log(navMenu.classList);
  });
}

// /*=============== REMOVE MENU MOBILE ===============*/
if (navclose) {
  navclose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*=============== SWIPER WACTHES ===============*/
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__images", 1.5, { opacity: 0, y: 150, delay: 0.1 });
gsap.from(".home__data", 1.5, { opacity: 0, x: -100, delay: 0.7 });
gsap.from(".home__info", 1.5, { opacity: 0, x: -100, delay: 0.8 });
