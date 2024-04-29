import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

new Swiper('.slider', {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 500,
    autoHeight: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
        nextEl: '.slider__arrow-next',
        prevEl: '.slider__arrow-prev'
    },
    breakpoints: {
        1100: {
            slidesPerView: 1.74,
        }
    }
});
