const hamBurger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamBurger.addEventListener ('click', () => {
    navList.classList.toggle('shown');
});