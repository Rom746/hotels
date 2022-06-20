// Сумма с помощью замыканий

function sum(a) {
    return function (b) {
        return a + b;
    }
}

// Фильтрация с помощью функции

function inBetween(a, b) {
    return c => a <= c && c <= b;
}

function inArray(array) {
    return c => array.includes(c);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// Сортировать по полю

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name')); users.forEach(user => console.log(user.name));
users.sort(byField('age')); users.forEach(user => console.log(user.name));

// Армия функций

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // функция shooter
            console.log(j); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5]();