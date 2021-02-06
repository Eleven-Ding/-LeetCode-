function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
//二叉树所有根到叶子节点路径组成的数字之和之和
//根据数组创建一颗二叉树
var createTree = function () {
  let biTree = new TreeNode(1);
  biTree.left = new TreeNode(2);
  biTree.right = new TreeNode(3);
  biTree.left.left = new TreeNode(4);
  biTree.left.left.left = new TreeNode(5);
  biTree.left.left.right = new TreeNode(6);
  biTree.right.left = new TreeNode(7);
  biTree.right.right = new TreeNode(8);
  biTree.right.left.right = new TreeNode(9);
  return biTree;
};
function DFS(root) {
  if (root == null) {
    return;
  }
  console.log(root.val);
  DFS(root.left);
  DFS(root.right);
}
DFS(createTree());
let sum = 0;
function findSum(root, pathSum) {
  if (root == null) {
    return;
  }

  pathSum = pathSum * 10 + root.val;

  if (root.left == null && root.right == null) {
    sum += pathSum;
    console.log(sum);
  }
  findSum(root.left, pathSum);
  findSum(root.right, pathSum);
}

findSum(createTree(), sum);
console.log(sum);
