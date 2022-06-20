// Установка и уменьшение значения счётчика

function makeCounter() {

    function counter() {
        return counter.count++;
    };

    counter.set = (value) => {
        counter.count = value;
    };

    counter.decrease = () => {
        counter.count--;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1

counter.set()

// Сумма с произвольным количеством скобок

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum(0)(1)(2)(3)(4)(5) + '');