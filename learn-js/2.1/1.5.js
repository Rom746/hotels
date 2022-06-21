// / Считаем потомков

let ArrLi = document.querySelectorAll('li');

for (const iterator of ArrLi) {
    console.log(iterator.innerText.split('\n')[0]
        + ": "
        + (iterator.querySelectorAll('li').length));
}
