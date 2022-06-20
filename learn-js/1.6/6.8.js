// Вывод каждую секунду

function printNumbers(from, to) {
    let num = from;
    let timer = setInterval (() => {
        console.log(num++);
        if (num == to+1) {
            clearInterval(timer);
        }
    }, 1000);
    
}

function printNumbers_(from, to) {
    let num = from;
    let timer = setTimeout (() => {
        console.log(num++);
        if (num < to+1) {
            timer();
        }
    }, 1000);
    
}
printNumbers(1, 3);