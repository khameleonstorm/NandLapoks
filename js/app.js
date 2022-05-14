document.querySelector('header').addEventListener('click', menu);

function menu(e){
    const nav = document.querySelector('.nav-menu');
    const burger = document.querySelector('.hamburger');

    if (e.target.classList.contains('hamburger')) {
        nav.classList += ' active';
        burger.classList += ' active';
    } else if (e.target.classList.contains('active') || e.target.parentElement.classList.contains('active')) {
        nav.className = 'nav-menu';
        burger.className = 'hamburger';
    }

    e.preventDefault();
};