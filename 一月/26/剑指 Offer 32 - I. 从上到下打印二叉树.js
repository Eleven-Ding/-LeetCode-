//从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//使用广度优先 把每一层的都遍历完 
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let stack = [root];
  let nums = [];
  while (stack.length) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let item = stack.shift();
      nums.push(item.val);

      item.left && stack.push(item.left);
      item.right && stack.push(item.right);
    }
  }
  return nums;
};
