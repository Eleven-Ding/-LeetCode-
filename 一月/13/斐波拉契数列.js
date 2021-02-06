function fab(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fab(n - 1) + fab(n - 2);
}

console.log(fab(5));

const Fibonacci = (n, sum1 = 1, sum2 = 1) => {
  if (n <= 2) return sum2;
  return Fibonacci(n - 1, sum2, sum1 + sum2);
};

console.log(Fibonacci(5));
