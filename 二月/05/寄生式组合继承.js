function Father() {}

Father.prototype.say = function () {
  console.log(this.name);
};

function Son() {
  this.name = "丁时三";
}


Son.prototype = Object.create(Father.prototype)

Son.prototype.constructor = Son

const son = new Son()

son.say()