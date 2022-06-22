/**
    Функция перебирает все возможные комбинации расстановки чисел 
    и проверяет, выполняется ли условие задачи для такой расстановки. 

    Возвращает количество правильных способов, которым можно расставить числа. 
    На вход метод получает массив из 9 чисел.
 */

function combinations(arr, result = [[]]) {

    for (let i = 0; i < arr.length; i++) {
        let copyArr = arr.slice();
        let currentElement = copyArr.splice(i, 1);

        if (copyArr.length == 0) {
            let r = result.concat(currentElement);
            // console.log(row);
            let f = r[2] * r[3] == r[4] * r[7]
                && r[4] * r[6] == r[2] * r[8]
                && r[7] * r[8] == r[3] * r[6];
            if (f) {
                result[0].push(r);
            }

        }

        combs(copyArr, result.concat(currentElement));
    }

    return 'count = ' + result[0].length;

}

let arr = [3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(combinations(arr));