//地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
//一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格
//（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
//例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
//但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

let fx = [-1, 1, 0, 0];
let fy = [0, 0, 1, -1]
var movingCount = function (m, n, k) {
    //根据mn生成一个二维数组
    let count = 0;
    let queue = [];
    let set = new Set()
    function bfs() {
        let startX = 0, startY = 0;
        queue.push([startX, startY])
        while (queue.length !== 0) {
            const [x, y] = queue.shift()
            if (set.has(`${x},${y}`)) {
                continue
            }
            set.add(`${x},${y}`)
            if (check(x) + check(y) <= k) {
                count++;
                for (let i = 0; i < 4; i++) {
                    const X = x + fx[i]
                    const Y = y + fy[i]
                    if (X >= 0 && X < n && Y >= 0 && Y < m) {
                        queue.push([X, Y])
                    }
                }
            }
        }
    }
    bfs()
    function check(num) {
        let sum = 0;
        const str = String(num)
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i])
        }

        return sum
    }

    return count
};
console.log(movingCount(3, 1, 0));