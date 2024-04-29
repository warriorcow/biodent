import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Navigation } from 'swiper/modules';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

new Swiper('.slider-small', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: '.slider-small__arrow-next',
        prevEl: '.slider-small__arrow-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});

Fancybox.bind('[data-fancybox="certificates"]');
