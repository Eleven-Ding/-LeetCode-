/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    let arr = [];
    function dfs(node, target, res, total) {
        if (node === null) {
            return
        };
        if (total + node.val == target && !node.left && !node.right) {
            res.push(node.val)
            arr.push(res)
            return
        }
        const leftArr = [...res, node.val]
        const rightArr = [...res, node.val]
        dfs(node.left, target, leftArr, total + node.val)
        dfs(node.right, target, rightArr, total + node.val)
    }
    dfs(root, target, [], 0)
    return arr
};


//广度优先呢
var pathSum = function (root, target) {
    let arr = [];
    function bfs() {
        if (root === null) {
            return
        }
        let arr = [[root, 0, []]] //第二个值表示到这个点的路径的和
        let routes = [];//许多路径

        while (arr.length) {
            const [node, total, res] = arr.shift();
            //对这个node进行判断
            if (!node.left && !node.right && total + node.val === target) {
                res.push(node.val)
                routes.push(res)
                return
            }

            node.left && arr.push([node.left, total, [...res]]);
            node.right && arr.push([node.right, total, [...res]]);

        }
    }

    bfs();
    return arr
};