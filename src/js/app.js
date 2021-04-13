///////////////////////////////////////////////////////
/////////SWIPER SLIDER
import Swiper, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Autoplay, EffectFade]);

let swiper = new Swiper(".swiper-container", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  cssMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///////////////////////////////////////////////////////
/////////JS SLIDER

const slider = function () {
  const slides = document.querySelectorAll(".partners__slide");
  const btnLeft = document.querySelector(".partners__slider-btn--left");
  const btnRight = document.querySelector(".partners__slider-btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();

///////////////////////////////////////////////////////
/////////HAMBURGER

const burger = document.querySelector(".header__hamburger");
const navi = document.querySelector(".nav__list");

burger.addEventListener("click", () => {
  navi.classList.toggle("header__active");
});

///////////////////////////////////////////////////////
/////////SCROLL TO TOP

const scrollBtn = document.querySelector(".footer__btn-up")
const header = document.querySelector(".header")

scrollBtn.addEventListener("click", (e)=> {
  e.preventDefault()

  header.scrollIntoView({ behavior: "smooth"})
})