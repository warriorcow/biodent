import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

new Swiper('.slider-gallery', {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    watchSlidesProgress: true,
    loop: true,
    pagination: {
        el: '.slider-gallery__pagination',
        clickable: true
    }
});

Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,
    idle: false,
    animated: false,
    showClass: false,
    hideClass: false,
    dragToClose: false,
    contentClick: false,
    Images: {
        zoom: false
    }
});
