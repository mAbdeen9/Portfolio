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

/*==================== ACCORDION SKILLS ====================*/

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
