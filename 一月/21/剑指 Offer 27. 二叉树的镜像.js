//请完成一个函数，输入一个二叉树，该函数输出它的镜像。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  change(root);
  function change(node) {
    if (node === null) {
      return;
    }
    [node.left, node.right] = [node.right, node.left];
    change(node.left);
    change(node.right);
  }

  return root;
};
