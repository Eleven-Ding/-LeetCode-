//867. 转置矩阵

/**
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
 * 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 * 输入：[[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const arr = [[1,2,3],[4,5,6]]
var transpose = function (A) {
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (!arr[j]) {
        arr[j] = [];
      }
      arr[j].push(A[i][j]);
    }
  }
  console.log(arr);
};

// var transpose = function (A) {
//   let width = A.length;
//   let height = A[0].length;
//   let arr = [];
//   for (let i = 0; i < height; i++) {
//     if (!arr[i]) {
//       arr[i] = [];
//     }

//     for (let j = 0; j < width; j++) {
//       arr[i].push(A[j][i]);
//     }
//   }

//   return arr;
// };


console.log(transpose(arr));
