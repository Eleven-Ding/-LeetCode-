//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

Array.prototype.MyReduce = function (fn, initialValue) {
  const arr = this;
  let base = typeof initialValue === "undefined" ? arr[0] : initialValue;
  const startPoint = typeof initialValue === "undefined" ? 1 : 0;
  
  arr.slice(startPoint).forEach((item, index) => {
    base = fn(base, item, index, arr);
  });
  return base;
};

let arr = [1, 2, 3, 4, 5, 6];

const p = arr.MyReduce((pre, n, index, arr) => {
  return pre + n;
}, 0);

console.log(p);
