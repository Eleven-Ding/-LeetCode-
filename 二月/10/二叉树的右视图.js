/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(root==null){
      return []
  }
  let stack = [root]
  let arr = []
  while(stack.length){
      const len = stack.length;
      for(let i = 0;i<len;i++){
          const item = stack.shift();
          item.left&&stack.push(item.left);
          item.right&&stack.push(item.right)
          if(i==len-1){
              arr.push(item.val)
          }
      }
  }
  return arr
};