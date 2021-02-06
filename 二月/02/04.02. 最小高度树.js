//给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。

//二叉搜索树就是左边的小于右边的

//分左右  中间是根节点 然后递归就好了

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) {
    return null;
  }

  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(num[middle]);
  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right =sortedArrayToBST( nums.slice(middle));
  return root;
};
