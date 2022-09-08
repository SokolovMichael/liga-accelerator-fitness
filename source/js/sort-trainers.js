import Swiper from './swiper/swiper-bundle.min';

const coaches = document.querySelector('.coaches');

const initSwiper = new Swiper('.coaches__swiper', {

  navigation: {
    prevEl: '.coaches__button--prev',
    nextEl: '.coaches__button--next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },

  grabCursor: true,
  slidesPerColumn: 1,
  simulateTouch: true,
  autoHeight: true,
  watchOverflow: true,
  initialSlide: 0,
  preloadImages: false,
  loop: true,
});

const sortTrainers = () => {
  coaches.classList.remove('coaches--nojs');
  initSwiper.init();
};

export {sortTrainers};
