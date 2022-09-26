/*==================== MENU SHOW Y HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// HIDDEN/SHOW MENU
navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((e) =>
  e.addEventListener("click", () => navMenu.classList.remove("show-menu"))
);

// ACCORDION SKILLS

const skillsList = document.querySelectorAll(".skills__content");

skillsList.forEach((e) =>
  e.addEventListener("click", () => {
    if (e.classList.contains("skills__open")) {
      e.classList.remove("skills__open");
      e.classList.add("skills__close");
    } else {
      e.classList.remove("skills__close");
      e.classList.add("skills__open");
    }
  })
);
// QUALIFICATION TABS

const eduTitle = document.querySelector(".edu-title");
const eduCol = document.querySelector(".edu-col");
const workTitle = document.querySelector(".work-title");
const workCol = document.querySelector(".work-col");

eduTitle.addEventListener("click", () => {
  workTitle.classList.remove("active__tab");
  eduTitle.classList.add("active__tab");
  workCol.classList.add("col__close");
  workCol.classList.remove("col__active");
  eduCol.classList.remove("col__close");
  eduCol.classList.add("col__active");
});

workTitle.addEventListener("click", () => {
  eduTitle.classList.remove("active__tab");
  workTitle.classList.add("active__tab");
  eduCol.classList.add("col__close");
  workCol.classList.remove("col__close");
  workCol.classList.add("col__active");
});

/*==================== SERVICES MODAL ====================*/

// PORTFOLIO SWIPER
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
