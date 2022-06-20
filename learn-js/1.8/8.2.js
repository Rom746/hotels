// Создайте новый объект с помощью уже существующего

function Tst(value) {
    this.value = value;
}

let obj = new Tst(1);
let obj2 = new obj.constructor(2);

// 
Tst.prototype = {};
let obj3 = new Tst(1);
let obj4 = new obj.constructor(2);