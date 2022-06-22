/*  
    Задача 3.
    Задача поиска высоты на которой разобьется объект, при наличии двух объектов.
    Функция отражает последовательность экспериментов.
    На вход функция получает высоту, с которой предмет начинает разбиваться. 
    На выходе массив с экспериментами.
*/

function sequenceExperiments(h) {
    let iter = Math.floor(Math.sqrt(h * 2));
    let currentHeight = 0;
    let result = [];
    let heightCrash;
    let count = 0;

    const checkCrashed = () => {
        return Math.random() > 0.85;
    }

    const forM = (start, end) => {
        for (let i = start; i < end; i++) {
            ++count;
            if (checkCrashed()) {
                heightCrash = i;
                result.push(i);
                return;
            }
        }
        heightCrash = end;
        result.push(end);
    }

    while (true) {
        if (checkCrashed() && currentHeight - iter > 0) {
            forM(currentHeight - iter - 1, currentHeight);
            break;
        }

        if (currentHeight + iter > h) {
            forM(currentHeight, h);
            break;
        }
        result.push(currentHeight += iter);
        --iter;
        ++count;

    }

    return { result, count, heightCrash };
}

console.log(sequenceExperiments(100));