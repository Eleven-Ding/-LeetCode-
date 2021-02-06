//从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let stack = [root];
  let nums = [];
  while (stack.length) {
    let levenums = [];
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let item = stack.shift();
      levenums.push(item.val);

      item.left && stack.push(item.left);
      item.right && stack.push(item.right);
    }
    nums.push(levenums);
  }
  return nums;
};
