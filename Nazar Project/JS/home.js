// Бургер-меню
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Закриття меню при кліку на посилання
document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});