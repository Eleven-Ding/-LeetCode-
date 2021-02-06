/**
 *
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 */

/**
 * @param {number} target
 * @return {number[][]}
 */

 //使用滑动窗口
var findContinuousSequence = function (target) {
  let arr = [];
  let numbers = [];
  let sum = 0;
  let i = 1;
  while (true) {
    if (sum === target) {
      arr.push([...numbers]);
      sum -= numbers.shift();
    }
    if (sum < target) {
      sum += i;
      numbers.push(i);
      i++;
    }
    if (sum > target) {
      sum -= numbers.shift();
      if (numbers.length < 2) {
        break;
      }
    }
  }
  return arr;
};

console.log(findContinuousSequence(15));
