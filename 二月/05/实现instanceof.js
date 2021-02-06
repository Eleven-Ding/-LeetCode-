[] instanceof Array; //true
//检查array.prototype 有咩有出现在 []的原型链上
function InstanceOf(A, B) {
  const prototype = B.prototype;
  let o = A.__proto__;
  while (o) {
    if (o === prototype) {
      return true;
    }
    o = o.__proto__;
  }
  return false;
}
console.log(InstanceOf("", Array));

let a = 2;
function b() {
  console.log(a);
}
function c() {
  let a = 3;
  b();
}
c();
