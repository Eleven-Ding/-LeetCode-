//给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

//使用滑动窗口
var findMaxAverage = function (nums, k) {
  //就是找和最大 的
  let stack = [],
    len = nums.length,
    max = 0;
  sum = 0;
  for (let i = 0; i < len; i++) {
    let item = nums[i];
    if (i < k) {
      stack.push(item);
      sum += item;
      max = sum;
    } else {
      sum = sum - stack.shift() + item;
      stack.push(item);
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max / k;
};
const arr = [1, 12, -5, -6, 50, 3],
  k = 4;
findMaxAverage(arr, k);
