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
    },
    on: {
        init(swiper) {
            if (swiper.slides.length <= 2 && swiper.currentBreakpoint === '1100') {
                swiper.allowTouchMove = false;
                swiper.navigation.nextEl.parentElement.style.display = 'none';
            }
        },
        breakpoint(swiper) {
            console.log(swiper.currentBreakpoint)
            if (swiper.slides.length === 2 && swiper.currentBreakpoint === 'max') {
                setTimeout(() => {
                    swiper.navigation.nextEl.parentElement.style.display = 'flex';
                }, 0);
            }
            if (swiper.slides.length === 2 && swiper.currentBreakpoint === '1100') {
                setTimeout(() => {
                    swiper.navigation.nextEl.parentElement.style.display = 'none';
                    swiper.allowTouchMove = false;
                }, 0);
            }
        }
    }
});
