/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
 *
 * 输入一棵二叉树的根节点，求该树的深度。
 * 从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};


//使用广度优先的方法
var maxDepth2 = function (root) {
  if (root == null) {
    return 0;
  }
  let dep = 0;
  let queue = [root];
  while (queue.length) {
    dep++;
    //  每一层的节点数  通过for循环 每次都把这一层的全部清空 把这些结点的子节点加进去又
    let level = queue.length;
    // 每次遍历一层元素
    for (let i = 0; i < level; i++) {
      // 当前访问的节点出队
      let curr = queue.shift();
      // 出队节点的子女入队
      curr.left && queue.push(curr.left) 
      curr.right && queue.push(curr.right) 
    }
  }
  return dep;
};
