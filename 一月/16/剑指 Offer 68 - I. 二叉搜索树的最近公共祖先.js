//给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//搜索树具有左节点小于子节点，右结点大于字结点的特征 利用这个 如果都小于 就去左边搜索，都大于就去右边搜索  只要有一个等于 那么就返回
//如果一个大于 一个小于 那么也就是公共的
var lowestCommonAncestor = function (root, p, q) {
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  return root;
};

