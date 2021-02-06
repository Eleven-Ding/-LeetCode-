//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  let flag = true;
  while (matrix.length) {
    // 从左到右
    if (flag) {
      // 第一层
      res = res.concat(matrix.shift());
      // '现在'的第一层到最后一层的末尾
      for (let i = 0; i < matrix.length; i++) {
        matrix[i].length && res.push(matrix[i].pop());
      }
      // 右到左
    } else {
      // 最后一层
      res = res.concat(matrix.pop().reverse());
      // '现在'的最后一层到第一层
      for (let i = matrix.length - 1; i > 0; i--) {
        matrix[i].length && res.push(matrix[i].shift());
      }
    }
    flag = !flag;
  }
  return res;
};
