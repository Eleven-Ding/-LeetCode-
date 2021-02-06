/**


 */
function f1() {
  let count = 0;
  return {
    inc: function () {
      count++;
      return count;
    },
  };
}
let result = f1();
console.log(result.inc()); //1
console.log(result.inc()); //2
console.log(result.inc()); //3

for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 300);
  })(i);
}
