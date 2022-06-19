// Операции с массивами

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");

// Сумма введённых чисел

function sumInput() {
    let arr = [];
    while (true) {
        let num = prompt('num:');
        if (!isFinite(num) || num === '' || num === null) {
            break
        } else {
            arr.push(num);
        }
    }
    let sum = 0;
    arr.forEach(num => sum += +num);
    return sum
}

// Подмассив наибольшей суммы

function getMaxSubSum(arr) {
    let bestSum = 0;
    let currentSum = 0;
    for (let num in arr) {
        currentSum = Math.max(0, currentSum + num);
        bestSum = Math.max(bestSum, currentSum)
    }
    return bestSum
}