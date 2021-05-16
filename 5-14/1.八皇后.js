/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

    let arr = new Array(n).fill('.').map(() => {
        return new Array(n).fill('.')
    })
    // toOne(arr)

    let array = []
    let X = new Set()
    let Y = new Set()
    let left = new Set();//左 x - y = ()
    let right = new Set();//右 x + y + ()
    function dfs(total, y) {
        if (total === n) {
            array.push((toOne(arr)))
            return
        }
        if (total < y - 1) {
            return
        }
        for (let i = 0; i < n; i++) {
            if (!X.has(i) && !Y.has(y) && !left.has(i - y) && !right.has(i + y)) {
                if (i >= 0 && i < n && y >= 0 && y < n) {
                    arr[i][y] = 'Q'
                    X.add(i);
                    Y.add(y);
                    left.add(i - y);
                    right.add(i + y);

                    dfs(total + 1, y + 1)

                    arr[i][y] = '.'
                    X.delete(i);
                    Y.delete(y);
                    left.delete(i - y);
                    right.delete(i + y);
                }
            }
        }
    }
    dfs(0, 0)

    function toOne(arr) {
        let array = []
        for (let i = 0; i < arr.length; i++) {
            array.push(arr[i].join(''))
        }
        return array;
    }

    
    return array
};
solveNQueens(4)