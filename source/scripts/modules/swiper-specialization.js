import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initSpecializationSwiper() {
    const swiper = new Swiper('.specialization__swiper', {
        direction: 'horizontal',
        slidesPerView: 8,
        spaceBetween: 24,
        modules: [Navigation],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};