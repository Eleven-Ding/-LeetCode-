function Father() {
  this.name = "丁时一";
}

Father.prototype.say = function () {
  console.log(this.name);
};

function Son() {
  this.age = 20;

  Father.apply(this, arguments);
  // this.name = "丁时二";
}
Son.prototype = new Father();
Son.prototype.constructor = Son;

const son = new Son();

son.say();
