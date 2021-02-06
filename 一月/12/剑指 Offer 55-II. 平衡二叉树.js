/**
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
 * 如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
  if (!root) return true;
  let left = Deep(root.left);
  let right = Deep(root.right);
  if (Math.abs(right - left) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};

function Deep(node) {
  if (node === null) {
    return 0;
  }
  return Math.max(Deep(node.left) + 1, Deep(node.right) + 1);
}
