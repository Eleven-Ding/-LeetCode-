//编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let len = matrix.length;
  let width = matrix[0].length;
  let setI = new Set();
  let setJ = new Set();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        setI.add(i);
        setJ.add(j);
      }
    }
  }
  //对i行 j列的全部转换成0
  for (let i of setI) {
    console.log(i);
    for (let j = 0; j < width; j++) {
      matrix[i][j] = 0;
    }
  }
  //j列
  for (let j of setJ) {
    for (let i = 0; i < len; i++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
};

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
