
 //这次有较于上次进行了优化   基于搜索二叉树， 到k就直接停下了
var kthLargest = function (root, k) {

  let i = 0;
  function DFS(node) {
    if (node === null) {
      return;
    }
    i++;
    if (i == k-1) {
      return node.val;
    }
    DFS(node.left);

    DFS(node.right);
  }
  return DFS(root);
};
