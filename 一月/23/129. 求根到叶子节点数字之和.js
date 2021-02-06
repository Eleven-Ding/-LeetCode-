const dfs = (root, prevSum) => {
  if (root === null) {
    return 0;
  }
  const sum = prevSum * 10 + root.val;
  if (root.left == null && root.right == null) {
    return sum;
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
};
var sumNumbers = function (root) {
  return dfs(root, 0);
};

//这里使用深度优先 把本次结点的值传给左右子结点  然后x10加上本次结点的值
//，直至null 返回0  左右都null 返回父节点x10 + 自己的值
