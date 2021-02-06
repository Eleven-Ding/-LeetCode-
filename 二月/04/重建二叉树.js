//输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
//假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

//前序遍历 preorder = [3,9,20,15,7]
//中序遍历 inorder = [9,3,15,20,7]

//思路  前序遍历的第一个 就是树的根节点 ，然后根据前序遍历的第一个去中序遍历中找，左边就是左数 右边就是右树

var buildTree = function (preorder, inorder) {
  //第一个
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const val = preorder[0];

  const i = inorder.indexOf(val);
  const root = new TreeNode(val);

  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));

  return root;
};
