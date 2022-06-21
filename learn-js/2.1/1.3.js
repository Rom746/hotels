// Дочерние элементы в DOM

let div = document.body.firstElementChild;
let ul = div.nextElementSibling;
let li = ul.lastElementChild;

console.log(li);

// Выделите ячейки по диагонали
let table = document.querySelector('.table')

for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}