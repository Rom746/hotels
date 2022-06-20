// Сумма свойств объекта

function sumSalaries(salaries) {
    let sum = 0;
    for (const iterator of Object.values(salaries)) {
        sum += iterator;
    }
    return sum
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


console.log(sumSalaries(salaries));

// Подсчёт количества свойств объекта

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(user));