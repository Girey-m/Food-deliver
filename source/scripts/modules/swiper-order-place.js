

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initOrderSwiper() {
    const swiper = new Swiper('.order-place__swiper', {
        direction: 'horizontal',
        slidesPerView: 4,
        modules: [Navigation],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
