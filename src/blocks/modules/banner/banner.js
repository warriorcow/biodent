import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

new Swiper('.banner__slider', {
    modules: [Autoplay, Pagination],
    autoplay: {
        delay: 2000
    },
    speed: 1000,
    allowTouchMove: false,
    pagination: {
        el: '.banner__pagination',
        clickable: true
    }
});
