// Создайте калькулятор

let calculator = {
    read: function (a, b) {
        this.a = +prompt('Write a:', 0);
        this.b = +prompt('Write b:', 0);
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};

// Цепь вызовов

let ladder = {
    step: 0,
    up() {
      this.step++;
      return  this;
    },
    down() {
      this.step--;
      return  this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return  this;
    }
  };