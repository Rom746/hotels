// Очистите элемент

function clear(elem) {
    // elem.innerHTML  = null;

    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}
clear(elem);

// Почему остаётся "aaa"?

table.remove();

// Создайте список

function createList() {
    let ul = document.createElement('ul');
    document.body.append(ul)
    while (true) {
        let str = prompt('Write str: ');

        if (str == null) { return; }
        if (str != '') {
            let li = document.createElement('li');
            li.textContent = str;
            ul.append(li);
        }
    }
}

// createList()

// Создайте дерево из объекта

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(container, data) {
    let ul = document.createElement('ul');
    container.append(ul);
    for (const key in data) {
        let li = document.createElement('li');
        li.textContent = key;
        ul.append(li);
        createTree(ul, data[key])
    }
}

let container = document.getElementById('container');
createTree(container, data);

// Выведите список потомков в дереве

let ArrLi = document.querySelectorAll('li');

for (const iterator of ArrLi) {
    let li = iterator.nextElementSibling.querySelectorAll('li');
    if (li.length) {
        console.log(iterator, iterator.nextElementSibling, li);
        iterator.textContent += ` [${li.length}]`;
    }

}

// Создайте календарь в виде таблицы

function createCalendar(elem, year, month) {
    const week = 'пн	вт	ср	чт	пт	сб	вс'.split('	');

    const createElement = (element, parent) => {
        let el = document.createElement(element);
        parent.append(el);
        return el;
    }
    const getDay = (date) => {
        let day = date.getDay();
        return day == 7 ? 1 : day++;
    }

    let table = createElement('table', elem);
    let tr = createElement('tr', table);

    table.style.borderCollapse = 'collapse';
    tr.style.backgroundColor = 'gray'

    week.forEach(str => {
        let th = createElement('th', tr);
        th.textContent = str;
        th.style.border = '1px solid black';
        th.style.padding = '3px';
    });

    let date = new Date(year, month - 1);

    while (date.getMonth() == month - 1) {
        let day = getDay(date);
        tr = createElement('tr', table);

        if (day != 1) {
            for (let i = 1; i < day; i++) {
                let td = createElement('td', tr);
            }
            for (let i = day; i <= 7; i++) {
                let td = createElement('td', tr);
                let dat = date.getDate();
                td.textContent = dat;
                date.setDate(dat + 1);
            }
        } else {
            for (let i = 1; i <= 7; i++) {
                let td = createElement('td', tr);
                let dat = date.getDate();
                td.textContent = dat;
                date.setDate(dat + 1);
            }
        }
    }

    for (const td of document.querySelectorAll('td')) {
        td.style.border = '1px solid black';
        td.style.padding = '3px';
        td.style.textAlign = 'center';
    }


}

createCalendar(document.body, 2012, 9);

// Цветные часы с использованием setInterval

const createElement = (tag, parent, text, ...args) => {
    let element = document.createElement(tag);
    element.setAttribute("class", args.join(" "));
    if (text) {
        element.textContent = text;
    }
    parent.appendChild(element);
    return element;
}

let div = createElement('div', document.body);
let hour = createElement('span', div, 'hh', 'hour');
createElement('span', div, ':')
let min = createElement('span', div, 'mm', 'min');
createElement('span', div, ':')
let sec = createElement('span', div, 'ss', 'sec');
let stop = createElement('button', div, 'Stop', 'stop');
let start = createElement('button', div, 'Start', 'start');

div.style.maxWidth = '100px';
hour.style.color = 'red';
min.style.color = 'green';
sec.style.color = 'blue';
start.style.marginLeft = '4px';

stop.addEventListener('click', stopTime);
start.addEventListener('click', startTime);

let timer;

function startTime() {
    timer = setInterval(function tic() {
        let date = new Date();
        let hour = document.querySelector('.hour');
        let min = document.querySelector('.min');
        let sec = document.querySelector('.sec');

        const getNum = (num) => {
            return num < 10 ? '0' + num : num;
        }

        hour.textContent = getNum(date.getHours());
        min.textContent = getNum(date.getMinutes());
        sec.textContent = getNum(date.getSeconds());

        return tic;
    }(), 1000);
}

function stopTime() {
    clearInterval(timer);
}

// Вставьте HTML в список

let one = document.getElementById('one');

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Сортировка таблицы

function sortTable () {
    const table = document.querySelector('.table-sort');

    let sorted  = Array.from(table.rows)
    .slice(1)
    .sort((a, b) => 
        a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1
    );

    table.append(...sorted)
    
};

sortTable()