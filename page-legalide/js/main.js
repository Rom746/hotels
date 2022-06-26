const btn = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu__list-items');

if (menu) {
    btn.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        btn.classList.toggle('_active');
    });
}