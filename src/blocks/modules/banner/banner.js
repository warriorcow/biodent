import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

new Swiper('.banner__slider', {
    modules: [Autoplay, Pagination],
    speed: 500,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.banner__pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            allowTouchMove: false
        }
    }
});
