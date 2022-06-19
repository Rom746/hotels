// Выведите чётные числа

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Замените for на while

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

// Повторять цикл, пока ввод неверен

let num;

do {
    num = prompt("Введите число больще 100", 0);
} while (num <= 100 && num);

// Вывести простые числа

let n = 10;
next:
for (let num = 1; num < n; num++) {
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) { break next }
    }
    console.log(num);
}


