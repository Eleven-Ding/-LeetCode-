//找出树的叶子节点上某一个值，找到后返回查找的路径

function createNode(val) {
    this.val = val;
    this.left = this.right = null
}




function findRoute(root, target) {
    if (root === null) {
        return
    }
}


//输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
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
    //准备使用深度优先
    function dfs(node, res, total) {
        if (node === null) {
            return
        }
        if (!node.left && !node.right && total === target) {
            arr.push(res)
            return
        }
        res.push(node.val)
        let newRes = [...res]
        dfs(node.left, newRes, total + node.val)
        dfs(node.right, newRes, total + node.val)
    }
    dfs(root, [], 0)
    return arr
};