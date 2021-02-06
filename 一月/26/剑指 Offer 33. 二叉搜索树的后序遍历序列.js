//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。
//如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

//补充 二叉搜索树 就是二叉排序树  左结点<根结点<右结点

/**
 * @param {number[]} postorder
 * @return {boolean}
 */

//最后一个是根节点， 从右边第一个找到比他大的那个  左边就是左树，右边就是右树 包括自己，不包括根结点
//然后递归
var verifyPostorder = function (postorder) {
  if (postorder.length <= 2) return true;
  //后序遍历结果：左右根
  //左子树比根节点小，右子树比根节点大
  const root = postorder.pop();
  let i = 0;
  while (postorder[i] < root) {
    i++;
  }
  //i及后面的节点都应该大于root
  const rightResult = postorder.slice(i).every((item) => item > root);
  //对左右子树递归判断。如果所有的都满足就返回true，否则返回false
  return (
    rightResult &&
    verifyPostorder(postorder.slice(0, i)) &&
    verifyPostorder(postorder.slice(i))
  );
};
