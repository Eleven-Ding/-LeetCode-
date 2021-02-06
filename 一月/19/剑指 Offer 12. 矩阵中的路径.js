/**
 *
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
 * 例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const board = [
    ["a", "b", "c", "e"],
    ["s", "f", "c", "s"],
    ["a", "d", "e", "e"],
  ],
  word = "bfce";
var exist = function (board, word) {
  const words = word.split("");
  console.log(words[0]);
  //先找到第一个字符
  let flag = true;
  let height = board.length;
  let width = board[0].length;
  let i, j;
  let indexX, indexY;
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      if (board[i][j] == words[0]) {
        indexX = i;
        indexY = j;
        break;
      }
    }
  }
  console.log(indexX, indexY);

  //从这里开始找整个路径
  for (let c = 1; c < words.length; c++) {
    const p =findFour(indexX,indexY)
  }

  //判断在i j 的四周 有没有这个字符
  function findFour(i, j, char, width, height) {
    let arr = [
      [i, j - 1],
      [i - 1, j],
      [i, j + 1],
      [i - 1, j],
    ];
    // const top = ;
    // const left = ;
    // const right = ;
    // const bottom = ;
    let m, n;
    flag = false;
    for (let k = 0; k < arr.length; k++) {
      [m, n] = arr[i];

      if (m < 0 || m >= width || n < 0 || n >= height) {
      } else {
        if (board[m][n] === char) {
          flag = true;
          break;
        }
      }
    }
    return flag;
  }
};

exist(board, word);
