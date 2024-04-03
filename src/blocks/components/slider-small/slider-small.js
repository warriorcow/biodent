import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Navigation } from 'swiper/modules';

new Swiper('.slider-small', {
    modules: [Navigation],
    slidesPerView: 6,
    spaceBetween: 22,
    navigation: {
        nextEl: '.slider-small__arrow-next',
        prevEl: '.slider-small__arrow-prev'
    }
});
