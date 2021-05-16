/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，
 * 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
 * 示例:
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//左右上下递增 重要。
var findNumberIn2DArray = function (matrix, target) {
    if(matrix.length===0){
        return false
    }
    let j = matrix[0].length-1;
    
    for (let i = 0; i < matrix.length && j >= 0;) {
        const item = matrix[i][j];
        if (item === target) {
            return true
        }
        if (item > target) {
            j--;
        } else {
            i++
        }
    }
    return false
};
