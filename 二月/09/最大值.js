//编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
  return String(a-b)[0]==='-'?b:a
};