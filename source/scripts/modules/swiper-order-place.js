// import Swiper from "swiper";
// // import "node_modules\swiper\swiper.css";
// // import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// export function initOrderSwiper() {
//     const swiper = new Swiper('.swiper', {
//         direction: 'horizontal',
//         modules: [Navigation],
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// };

import { Navigation, Pagination } from 'swiper/modules';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

export const swiper = new Swiper('.swiper', {
    // Optional parameters
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
