// Найти размер прокрутки снизу

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Узнать ширину полосы прокрутки

let scrollLineWidth = div.offsetWidth - div.clientWidth;

// Поместите мяч в центр поля

let ball = document.getElementById('ball');
let field = document.getElementById('field');

let width = field.clientWidth / 2 - ball.clientWidth / 2;
let height = field.clientHeight / 2 - ball.clientHeight / 2;

ball.style.left = width + 'px';
ball.style.top = height + 'px';