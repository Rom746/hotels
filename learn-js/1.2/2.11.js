// Проверка значения из диапазона

if (age >= 14 && age <= 90) { console.log(true); }

// Проверка значения вне диапазона

if (!(age >= 14 && age <= 90)) { console.log(true); }
if (!(age < 14 && age < 90)) { console.log(true); }

// Проверка логина

let userName = prompt('Кто там?');
let result;
if (userName == 'Админ') {
    let userPass = prompt('Пароль??');
    if (userPass == 'Я Главный') {
        result = 'Здравствуйте!';
    } else {
        result = userPass == null ? 'Отменено' : 'Неверный пароль';
    }
} else {
    result = userName == null ? 'Отменено' : 'Я вас не знаю';
}

console.log(result);