// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
//输入: 3
//输出: [1,3,3,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [];
  for (let i = 0; i <= rowIndex; i++) {
    arr[i] = [];

    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }

  return arr[rowIndex];
};
console.log(getRow(3));
