/**
 *
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。
 * 例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，
 * 但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  //辅助栈
  const stack = [];
  //指向poped当前的下标
  let index = 0;
  //把pushed的元素一个一个入栈
  for (let i = 0, len = pushed.length - 1; i <= len; i++) {
    stack.push(pushed[i]);
    //把入栈的当前元素和pushed当前指向的元素进行对比
    //相等话就把辅助栈出栈
    //pushed下标往右移动
    while (stack.length !== 0 && stack[stack.length - 1] === popped[index]) {
      stack.pop();
      index++;
    }
  }
  //如果stack为空，说明符合题目
  return !stack.length;
};

let pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1];

console.log(validateStackSequences(pushed, popped));
