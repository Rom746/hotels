// Создание калькулятора при помощи конструктора

function Calculator() {
    this.read = function (a, b) {
        this.a = +prompt('Write a:', 0);
        this.b = +prompt('Write b:', 0);
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    }
};

let calculator = new Calculator();

// Создаём Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (a, b) {
        this.value += prompt('Write num:', 0);
    };
};