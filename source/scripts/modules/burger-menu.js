import { menu } from './../data/constants';

const { burgerButton, burgerMenu, burgerSpan1, burgerSpan2, burgerSpan3 } = menu;

export function initBurgerMenu() {
  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('visually__hidden')
    burgerSpan1.classList.toggle('hidden')
    burgerSpan2.classList.toggle('open-burger-two')
    burgerSpan3.classList.toggle('open-burger-three')
  });
}
