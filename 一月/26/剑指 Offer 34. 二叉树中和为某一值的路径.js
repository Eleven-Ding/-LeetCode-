//输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
//从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let path = [];
  dfs(root, sum, []);
  //sum存放的是当前的总和  arr存放的是当前的数组
  function dfs(root, sum, [...arr]) {
    if (root == null) {
      return;
    }
    sum -= root.val;

    arr.push(root.val);
    if (sum == 0 && root.left == null && root.right == null) {
      path.push(arr);
    } else {
      dfs(root.left, sum, arr);
      dfs(root.right, sum, arr);
    }
  }
  return path;
};
