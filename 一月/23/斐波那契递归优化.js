function fab(n, sum2 = 1, sum1 = 1) {
  if (n === 1 || n === 0) {
    return sum2;
  }
  return fab(n - 1, sum1 + sum2, sum2);
}

console.log(fab(5));;
