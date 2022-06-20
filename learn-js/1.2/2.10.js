// Название JavaScript

if (prompt(`Какое "официальное" название JavaScript?`) == "ECMAScript") {
    console.log("Верно");
} else {
    console.log(`Не знаете? “ECMAScript”!`);
}

// Покажите знак числа

let num = prompt('Введите число', 0);

if (num > 0) {
    console.log(1);
} else if (num < 0) {
    console.log(-1);
} else {
    console.log(0);
}

// Перепишите 'if' в '?'

let result = a + b < 4 ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';