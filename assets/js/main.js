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

// SHOW SCROLL UP
const scrollArrow = document.getElementById("scroll-up");

const scrollTop = () => {
  if (window.scrollY >= 560) {
    scrollArrow.classList.add("show-scroll");
  } else {
    scrollArrow.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollTop);

// DARK LIGHT THEME 💥

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
