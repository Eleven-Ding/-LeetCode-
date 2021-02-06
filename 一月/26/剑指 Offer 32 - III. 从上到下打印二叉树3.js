//请实现一个函数按照之字形顺序打印二叉树，
//即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，
//第三行再按照从左到右的顺序打印，其他行以此类推。

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let i = 0;
  let stack = [root];
  let nums = [];
  while (stack.length) {
    i++;
    let levenums = [];
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let item = stack.shift();
      levenums.push(item.val);

      item.left && stack.push(item.left);
      item.right && stack.push(item.right);
    }
    if ((i & 1) == 0) {
      nums.push(levenums.reverse());
    } else {
      nums.push(levenums);
    }
  }
  return nums;
};
