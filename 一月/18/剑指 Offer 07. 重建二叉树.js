//输入某二叉树的前序遍历和中序遍历的结果，
//请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  const rootval = preorder[0];
  let root = new TreeNode(rootval);
  let i = 0;
  //先找到preorder的第一个 那么就是根结点
  for (; i < inorder.length; ++i) {
    if (inorder[i] === rootval) {
      break;
    }
  }
  //这时候 i的位置就是根节点的值  然后i的左边就是左子树，i的右边就是右子

  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return root;
};

console.dir(buildTree(preorder, inorder));
//前序遍历是先输出根结点再左右孩子

//中序遍历是先输出左孩子再根节点右孩子
