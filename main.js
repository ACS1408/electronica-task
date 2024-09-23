import { createIcons, icons } from "lucide";
import createVisualizerDots from "./modules/createVisualizerDots";
import createRating from "./modules/createRating";
import categoryTab from "./modules/categoryTab";
import Swiper from "swiper/bundle";

import "swiper/css";
import "swiper/css/navigation";
import statsAnimation from "./modules/statsAnimation";

(() => {
  createIcons({ icons });

  const dealsSlider = new Swiper(".deals-slider", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
      prevEl: ".deals-swiper-prev",
      nextEl: ".deals-swiper-next",
    },
    breakpoints: {
      576: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3.4,
        spaceBetween: 40,
      },
    },
  });

  const testimionialsSwiper = new Swiper(".testimonials-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 1000,
    autoHeight: true,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: "auto",
        direction: "vertical",
        centeredSlides: true,
      },
    },
  });

  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("show-menu");
  });
  const searchOpener = document.querySelector(".search-toggler");
  const searchCloser = document.querySelector(".search-close");
  searchOpener.addEventListener("click", () => {
    document.body.classList.add("show-search");
  });
  searchCloser.addEventListener("click", () => {
    document.body.classList.remove("show-search");
  });

  statsAnimation();
  categoryTab();
  createRating();
  createVisualizerDots();
})();

window.addEventListener("scroll", () => {
  const { pageYOffset } = window;
  if (pageYOffset > 0) {
    document
      .querySelector(".main-header")
      .classList.add("border-b", "border-[#ededed]");
  } else {
    document
      .querySelector(".main-header")
      .classList.remove("border-b", "border-[#ededed]");
  }
});
