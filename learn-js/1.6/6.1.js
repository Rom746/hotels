// Вычислить сумму чисел до данного

function sumTo1(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
}

function sumTo2(n) {
    return (n == 1) ? 1 : n + sumTo2(n - 1);
}

function sumTo3(n) {
    return n * (n + 1) / 2;
}

// Вычислить факториал

function factorial(n) {
    return (n == 1) ? 1 : n * factorial(n - 1);
}

// Числа Фибоначчи

function fib1(n) {
    return (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
}

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
console.log(fib(7));

// Вывод односвязного списка

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    console.log(list.value);
    return (list.next) ? printList(list.next) : '';
}

function printList_(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }

}

// printList_(list)

// Вывод односвязного списка в обратном порядке 

function printListRevers(list) {
    if (list.next) { printList(list.next) }
    console.log(list.value);
}

function printListRevers_(list) {
    let arr = [];
    while (list) {
        console.log(arr);
        arr.push(list.value);
        list = list.next;
    }
    arr.reverse().forEach(a => console.log(a));
}
printListRevers_(list)