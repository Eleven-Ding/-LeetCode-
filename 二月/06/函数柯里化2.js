function add() {
  const args = [...arguments];

  const fn = function () {
    args.push(...arguments);
    return fn;
  };
  fn.toString = function () {
    return args.reduce((pre, n) => {
      return pre + n;
    }, 0);
  };

  return fn;
}
console.log(+add(1, 2, 3)(4)(5, 7, 8));
