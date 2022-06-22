// Найдите координаты точек относительно окна браузера

let field = document.getElementById('field');

let coord = field.getBoundingClientRect();
let c1 = {
    x: coord.x, 
    y: coord.y
};
let c2 = {
    x: coord.right, 
    y: coord.bottom
};
let c3 = {
    x: coord.left + field.clientLeft, 
    y: coord.top + field.clientTop
};
let c4 = {
    x: coord.left + field.clientLeft + field.clientWidth, 
    y: coord.top + field.clientTop + field.clientHeight
};
console.log(c1, c2, c3, c4);

// Покажите заметку рядом с элементом

function positionAt(anchor, position, elem) {
    let coord = anchor.getBoundingClientRect();

    switch (position) {
        case 'top':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.top - elem.offsetHeight + "px";
            break;
        case 'right':
            elem.style.left = coord.left + anchor.offsetWidth + "px";
            elem.style.top = coord.top + "px";
            break;

        case 'bottom':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.top + anchor.offsetHeight + "px";
            break;
    }
}

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    // positionAt(anchor, position, note);
    // positionAtAbs(anchor, position, note);
    positionAtAbs_(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");

// Покажите заметку около элемента (абсолютное позиционирование)

function positionAtAbs(anchor, position, elem) {
    let coord = getCoords(anchor);

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }

    elem.style.position = 'absolute';
    document.body.style.height = '2000px';

    switch (position) {
        case 'top':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.top - elem.offsetHeight + "px";
            break;
        case 'right':
            elem.style.left = coord.left + anchor.offsetWidth + "px";
            elem.style.top = coord.top + "px";
            break;

        case 'bottom':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.top + anchor.offsetHeight + "px";
            break;
    }
}


// Расположите заметку внутри элемента (абсолютное позиционирование)

function positionAtAbs_(anchor, position, elem) {
    let coord = getCoords(anchor);

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }

    elem.style.position = 'absolute';
    document.body.style.height = '2000px';

    switch (position) {
        case 'top-out':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.top - elem.offsetHeight + "px";
            break;
        case 'right-out':
            elem.style.left = coord.left + anchor.offsetWidth + "px";
            elem.style.top = coord.top + "px";
            break;

        case 'bottom-out':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.top + anchor.offsetHeight + "px";
            break;

        case 'top-in':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.top + "px";
            break;
        case 'right-in':
            elem.style.left = coord.right - elem.offsetWidth + "px";
            elem.style.top = coord.top + "px";
            break;

        case 'bottom-in':
            elem.style.left = coord.left + "px";
            elem.style.top = coord.bottom - elem.offsetHeight + "px";
            break;
    }
}

showNote(blockquote, "top-in", "top-in");
showNote(blockquote, "right-in", "right-ni");
showNote(blockquote, "bottom-in", "bottom-in");

showNote(blockquote, "top-out", "top-out");
showNote(blockquote, "right-out", "right-out");
showNote(blockquote, "bottom-out", "bottom-out");