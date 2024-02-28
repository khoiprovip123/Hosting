const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const countUp = (target, element) => {
  let count = 0;
  const speed = Math.ceil(target / 100);
  const timer = setInterval(() => {
    count += speed;
    element.textContent = count;
    if (count >= target) {
      clearInterval(timer);
      element.textContent = target;
    }
  }, 10);
};

window.addEventListener("scroll", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    if (
      isElementInViewport(counter) &&
      !counter.classList.contains("counted")
    ) {
      countUp(parseInt(counter.getAttribute("data-target")), counter);
      counter.classList.add("counted");
    }
  });
});

// drop down animation
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".section .toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const section = toggle.parentElement;
      const plusIcon = toggle.querySelector(".plus-icon");
      const minusIcon = toggle.querySelector(".minus-icon");
      section.classList.toggle("active");
      plusIcon.style.display = plusIcon.style.display === "none" ? "" : "none";
      minusIcon.style.display =
        minusIcon.style.display === "none" ? "" : "none";
    });
  });
});

// open-close menu
const menuIcon = document.querySelector(".menu-btn");
const closeIcon = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-moblie");
const menuMobileCon = document.querySelector(".content-menu");

const showMenu = () => menuMobile.classList.add("show-menu");
const hideMenu = () => menuMobile.classList.remove("show-menu");
const stopPropagation = (e) => e.stopPropagation();

menuIcon.addEventListener("click", showMenu);

closeIcon.addEventListener("click", hideMenu);

menuMobile.addEventListener("click", hideMenu);

menuMobileCon.addEventListener("click", stopPropagation);

// owl

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 4,
    },
  },
});
