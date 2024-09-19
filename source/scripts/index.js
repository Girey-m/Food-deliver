const burgerButton = document.querySelector('.header__item-burger');
const burgerMenu = document.querySelector('.header__burger');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('visually__hidden')
});