// Добавить функциям метод "f.defer(ms)"

function f1() {
    console.log("Hello!");
}

Function.prototype.defer1 = function (time) {
    setTimeout(this, time);
};

f1.defer1(1000);

// Добавьте функциям декорирующий метод "defer()"

function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (time) {
    let func = this;
    return function(...args) {
        setTimeout(func.apply(this, args), time);
    }
};

f.defer(1000)(1, 2); 
