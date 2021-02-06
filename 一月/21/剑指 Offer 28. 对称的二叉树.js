/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function isMirror(r1, r2) {
    //如果都为null 对称
    if (!r1 && !r2) {
      return true;
    }
    //只要其中一个为空，另一个不为，则不对称
    if (!r1 || !r2) {
      return false;
    }
    //判断根节点
    //判断r1的左树和r2的右
    //判断r2的左树和r1的右
    return (
      r1.val == r2.val &&
      isMirror(r1.left, r2.right) &&
      isMirror(r1.right, r2.left)
    );
  }

  return isMirror(root, root);
};
