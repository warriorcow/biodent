import Swiper from 'swiper';
import 'swiper/scss';
import { Navigation } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

new Swiper('.slider-default', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    navigation: {
        nextEl: '.slider-default__arrow-next',
        prevEl: '.slider-default__arrow-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 56
        }
    },
    on: {
        init(swiper) {
            if (swiper.slides.length <= 3 && swiper.currentBreakpoint === '1100') {
                swiper.allowTouchMove = false;
                swiper.navigation.nextEl[0].parentElement.style.display = 'none';
            }
        },
        breakpoint(swiper) {
            if (swiper.slides.length > 2 && (swiper.currentBreakpoint === '768' || swiper.currentBreakpoint === 'max')) {
                setTimeout(() => {
                    console.log('mobile')
                    swiper.navigation.nextEl[0].parentElement.style.display = 'flex';
                }, 0);
            }
            if (swiper.slides.length === 3 && swiper.currentBreakpoint === '1100') {
                setTimeout(() => {
                    swiper.navigation.nextEl[0].parentElement.style.display = 'none';
                    swiper.allowTouchMove = false;
                }, 0);
            }
        }
    }
});

Fancybox.bind('[data-fancybox="slider"]', {
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
