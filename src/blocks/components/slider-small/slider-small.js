import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Navigation } from 'swiper/modules';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export function createHTMLSliderSmall(slides) {
    if (!slides.length) {
        return;
    }
    const parentDiv = document.querySelector('.more-about-doctor__certificates');
    const swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container slider-small';

    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';

    slides.forEach(image => {
        const swiperSlide = document.createElement('a');
        swiperSlide.className = 'swiper-slide slider-small__item';
        swiperSlide.dataset.fancybox = 'certificates';
        swiperSlide.href = image.fancy;
        const swiperImage = document.createElement('img');
        swiperImage.src = image.src;
        swiperImage.className = 'slider-small__image';
        swiperSlide.appendChild(swiperImage);
        swiperWrapper.appendChild(swiperSlide);
    });

    swiperContainer.appendChild(swiperWrapper);
    createNavigation(swiperContainer);
    parentDiv.appendChild(swiperContainer);

}

function createNavigation(element) {
    const navigationElement = document.createElement('div');
    navigationElement.className = 'slider-small__navigation';
    element.appendChild(navigationElement);

    const navigationArrowPrevElement = document.createElement('div');
    navigationArrowPrevElement.className = 'slider-small__arrow slider-small__arrow-prev';
    navigationElement.appendChild(navigationArrowPrevElement);

    const navigationArrowNextElement = document.createElement('div');
    navigationArrowNextElement.className = 'slider-small__arrow slider-small__arrow-next';
    navigationElement.appendChild(navigationArrowNextElement);

    [navigationArrowPrevElement, navigationArrowNextElement].forEach(button => {
        const navigationArrowIconElement = document.createElement('div');
        navigationArrowIconElement.className = 'slider-small__arrow-icon';
        button.appendChild(navigationArrowIconElement);
    });
}

export function initSliderSmall() {
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
        },
        on: {
            slidesUpdated(swiper) {
                setTimeout(() => {
                    if (swiper.slides.length <= 2 && swiper.currentBreakpoint === 'max') {
                        swiper.allowTouchMove = false;
                        swiper.navigation.nextEl[0].parentElement.style.display = 'none';
                    }
                    if (swiper.slides.length <= 4 && swiper.currentBreakpoint === '768') {
                        swiper.allowTouchMove = false;
                        swiper.navigation.nextEl[0].parentElement.style.display = 'none';
                    }
                }, 0);
            },
            breakpoint(swiper) {
                if (swiper.slides.length > 2 && (swiper.currentBreakpoint === 'max')) {
                    setTimeout(() => {
                        swiper.allowTouchMove = true;
                        swiper.navigation.nextEl[0].parentElement.style.display = 'flex';
                    }, 0);
                }
                if (swiper.slides.length > 4 && (swiper.currentBreakpoint === '768')) {
                    setTimeout(() => {
                        swiper.navigation.nextEl[0].parentElement.style.display = 'flex';
                    }, 0);
                }
            }
        }
    });
}

export function destroySliderSmall() {
    const sliderSmallElement = document.querySelector('.slider-small');

    if (sliderSmallElement) {
        document.querySelector('.slider-small').remove();
    }
}

Fancybox.bind('[data-fancybox="certificates"]', {
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
