//写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  let temp = a;
  if (a > b) {
    a = b;
    b = temp;
  }

  console.log(b<<(a&b)^a);
};

add(3, 5);
