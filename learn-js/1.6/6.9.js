// Декоратор-шпион

function spy(func) {
    wrapper.calls = [];
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }
    return wrapper
}

function work(a, b) {
    console.log(a + b);
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join());
}

// Задерживающий декоратор

function f(x) {
    console.log(x);
}

function delay(func, time) {
    return function () {
        setTimeout(() => func.apply(this, arguments), time);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

// Декоратор debounce

let ff = debounce(f, 1000);

function debounce(func, time) {
    let f = true;
    return function () {
        if (!f) { return }
        func.apply(this, arguments);
        f = !f;
        setTimeout(() => { f = !f; }, time);
    }
}

ff(100001);
ff(100002);

// Тормозящий (throttling) декоратор

function throttle(func, time) {
    let f = true;
    let save = {};
    return function () {
        if (!f) {
            save.func = func;
            save.this = this;
            save.args = arguments;
            return;
        }
        func.apply(this, arguments);
        f = !f;
        setTimeout(() => {
            if (save.func) {
                save.func.apply(save.this, save.args);
            }
            f = !f;
        }, time);
    }
}

let f10001 = throttle(f, 1000);

f10001(11111);
f10001(22222);
f10001(33333);