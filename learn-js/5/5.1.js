// Сумма пользовательских чисел

let a = prompt("a: ", "");
let b = prompt("b: ", "");

alert(+a + +b);

// Ввод числового значения

function readNumber() {
    let num = prompt("Num:");
    if (num == null || num == '') {
        return null;
    } else if (isFinite(num)) {
        return +num
    } else {
        readNumber();
    }
}

readNumber();

// Случайное число от min до max

function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Случайное целое число от min до max

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }