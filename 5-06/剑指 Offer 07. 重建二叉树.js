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
 var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
          return null;
      }
      //取第一个
      const rootVal = preorder[0]
      const root = new TreeNode(rootVal);
      const index = inorder.indexOf(rootVal)
      //这个index有两个含义 一个是左边树节点的个数  数组的第一个就是节点的头节点
      //inorder 只是用来辅助查找两边的节点个数的 
      root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0,index));
      root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1));
  
      return root
  
  };