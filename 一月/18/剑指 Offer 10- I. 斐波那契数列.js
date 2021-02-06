/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return Fibonacci(n);
};

const Fibonacci = (n, sum1 = 1, sum2 = 1) => {
  if (n == 0) {
    return 0;
  }
  if (n <= 2) return sum2;
  return Fibonacci(n - 1, sum2, (sum1 + sum2) % 1000000007);
};
console.log(fib(45));
//使用循环做法
var fib2 = function (n) {
  if (n <= 1) {
    return n;
  }
  let a = 0,
    b = 1;
  while (n >= 2) {
    c = a + b;
    a = b;
    b = c;
    n--;
  }
  return c % 1000000007;
};
console.log(fib2(45));

//循环  + 解构赋值
function fib3(n) {
  let [pre, cur] = [0, 1];

  for (let i = 0; i < n; i++) {
    [pre, cur] = [cur, pre + cur];
  }
  return pre;
}

console.log(fib3(5));
