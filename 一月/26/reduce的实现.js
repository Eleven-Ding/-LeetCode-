//我觉得首先要对reduce了解，然后对其的参数有所了解

//如果没有初始值的话 1.使用数组第一项作为初始值 2.然后从第二项开始遍历
function myReduce(fn, initial) {
  let arr = this;
  let base = initial ? initial : arr[0];
  const point = initial ? 1 : 0;
  arr.slice(point).forEach((item, index) => {
    base = fn(base, item, index, arr);
  });
  return base;
}

let arr = [];
arr.reduce(function (pre, cur, index, arr) {}, 0);
