import Swiper from './swiper/swiper-bundle.min';

const reviews = document.querySelector('.reviews');

const initCarousel = new Swiper('.reviews__swiper', {

  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next',
  },

  slidesPerView: 1,
  slidesPerGroup: 1,
  grabCursor: true,
  slidesPerColumn: 1,
  autoHeight: true,
  watchOverflow: true,
  initialSlide: 0,
  preloadImages: false,
  spaceBetween: 40,
});

const sortReviews = () => {
  reviews.classList.remove('reviews--nojs');
  initCarousel.init();
};

export {sortReviews};
