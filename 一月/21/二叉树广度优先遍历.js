var levelOrder = function (root) {
  if (root == null) {
    return [];
  }
  let result = [];
  let queue = [root];
  while (queue.length) {
    // 每一层的节点数
    let level = queue.length;
    let currLevel = [];
    // 每次遍历一层元素
    for (let i = 0; i < level; i++) {
      // 当前访问的节点出队
      let curr = queue.shift();
      // 出队节点的子女入队
      curr.left ? queue.push(curr.left) : "";
      curr.right ? queue.push(curr.right) : "";
      currLevel.push(curr.val);
    }
    result.push(currLevel);
  }
  return result;
};
