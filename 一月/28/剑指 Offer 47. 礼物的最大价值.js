/**
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、
 * 直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

 //有点兴奋  见识了动态规划
var maxValue = function (grid) {
  const len = grid.length;
  if (len === 0) {
    return 0;
  }
  let dp = [];
  const wid = grid[0].length;
  for (let i = 0; i < len; i++) {
    dp[i] = [];
  }
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < wid; ++j) {
      let top = (left = 0);
      //可以取上
      if (i > 0) {
        left = dp[i - 1][j];
        //可以取左
      }
      if (j > 0) {
        top = dp[i][j - 1];
      }
      dp[i][j] = Math.max(left, top) + grid[i][j];
    }
  }
  return dp[len - 1][wid - 1];
};

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(maxValue(grid));
