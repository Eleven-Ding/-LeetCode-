//输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {

  let arr = new Array(Math.pow(10,n)-1).fill(0);
  let i;
  for (i = 1; i <=arr.length; i++) {
      arr[i-1] = i
  }
  return arr
};