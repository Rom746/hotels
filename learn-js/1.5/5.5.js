// Переведите текст вида border-left-width в borderLeftWidth

function camelize(str) {
    return str
        .split('-')
        .map(
            (st, index) => index == 0 ? st : st[0].toUpperCase() + st.slice(1)
        )
        .join('');
}

console.log(camelize("background-color"));

// Фильтрация по диапазону

function filterRange(arr, a, b) {
    return arr.filter(item => item <= b && item >= a);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered, arr);

// Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            --i;
        }
    }
}

filterRangeInPlace(arr, 1, 4);

console.log(filtered, arr);

// Сортировать в порядке по убыванию

let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(arr1);

// Скопировать и отсортировать массив

function copySorted(arr) {
    return arr.concat().sort();
}

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

console.log(arr2, sorted);

// Создать расширяемый калькулятор

function Calculator() {
    this.method = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };
    this.calculate = function (str) {
        let arr = str.split(' ');
        return this.method[arr[1]](+arr[0], +arr[2]);
    };
    this.addMethod = function (name, func) {
        this.method[name] = func;
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result);

// Трансформировать в массив имён

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [vasya1, petya1, masha1];

let names = users1.map(user => user.name);

console.log(names);


// Трансформировать в объекты

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya2, petya2, masha2];

let usersMapped = users.map(user => ({
    fullName: user.name + ' ' + user.surname,
    id: user.id
}));

console.log(usersMapped[0].id, usersMapped[0].fullName);

// Отсортировать пользователей по возрасту

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr3 = [vasya, petya, masha];

sortByAge(arr3);

function sortByAge(arr) {
    arr.sort((a, b) => { return a.age - b.age; })
}

console.log(arr3);

// Перемешайте массив

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}

let arr4 = [1, 2, 3, 4, 5, 6];

shuffle(arr4);
console.log(arr4);

// Получить средний возраст

function getAverageAge(users) {
    return users.reduce((sum, user) => user.age + sum, 0) / users.length;
}

console.log(getAverageAge(arr3));

// Оставить уникальные элементы массива

function unique(arr) {
    let uniqueArr = [];
    arr.forEach(element => {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    });
    return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));