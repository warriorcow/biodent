import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const swiper = new Swiper('.banner__slider', {
    modules: [Autoplay, Pagination],
    autoplay: {
        delay: 2000
    },
    loop: true,
    speed: 1000,
    pagination: {
        el: '.banner__pagination',
        clickable: true
    }
});
