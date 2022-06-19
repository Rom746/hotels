// Привет, object

let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Проверка на пустоту

function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }
    return true
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

// Сумма свойств объекта

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (const key in salaries) {
    sum += salaries[key];
}

// Умножаем все числовые свойства на 2


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric (obj) {
    for (const key in obj) {
        if (typeof  obj[key] == Number) {
            obj[key] *= 2;
        }
    } 
}
 
multiplyNumeric(menu);

