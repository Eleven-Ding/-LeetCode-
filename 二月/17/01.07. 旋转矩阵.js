//给一个N x N 的二维数组（矩阵）然后进行旋转

// 给定 matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

//不占用额外内存空间能否做到？
const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

var rotate = function (matrix) {
  //先来一个使用额外空间的。。。。
  let newArr = [];
  const length = matrix.length;

  for (let i = 0; i < length; i++) {
    //第一行
    const item = matrix[i];
    //放到最后一列
    for (let j = 0; j < length; j++) {
      if (!Array.isArray(newArr[j])) {
        newArr[j] = [];
      }
      newArr[j].unshift(item[j]);
    }
  }
  return newArr;
};

console.log(rotate(matrix));
