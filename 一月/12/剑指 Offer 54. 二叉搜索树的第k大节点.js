/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//使用深度优先 把全部的放入数组并且排序
var kthLargest = function (root, k) {
  let arr = [];

  function DFS(node) {
    if (node === null) {
      return;
    }
    arr.push(node.val);
    DFS(node.left);
    DFS(node.right);
  }
  DFS(root);

  arr.sort((a, b) => {
    return b - a;
  });

  return arr[k - 1];
};
