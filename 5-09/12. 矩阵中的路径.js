/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//采用方向数组 

let visit = [];
let fx = [0, 0, -1, 1]
let fy = [-1, 1, 0, 0]



var exist = function (board, word) {
    const len = board.length;
    const wid = board[0].length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < wid; j++) {
            if (dfs(board, i, j, 0)) {
                return true
            }
        }

    }
    return false

    function dfs(board, i, j, k) {
        if (i < 0 || i >= len || j >= wid || j < 0 || board[i][j] !== word[k]) {
            return false
        }
        if (k === word.length - 1) {
            return true
        }
        board[i][j] = ''
        let bool = false;
        for (let x = 0; x < 4; x++) {
            bool = bool || dfs(board, i + fy[x], j + fx[x], k + 1)
        }
        // let res = dfs(board, i + 1, j, k + 1) || dfs(board, i - 1, j, k + 1) ||
        //     dfs(board, i, j + 1, k + 1) || dfs(board, i, j - 1, k + 1);
        board[i][j] = word[k]
        return bool

    }



};
