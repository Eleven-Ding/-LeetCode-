//给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let nums = [7, 2, 4],
  k = 2;
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return [];
  let res = [];
  const len = nums.length;
  let left = 0; //滑动窗口左边界
  let right = k - 1; //右边界
  while (right < len) {
    let max = Number.MIN_SAFE_INTEGER; //初始化最大值为最小的安全数字
    //在当前滑动窗口里找出最大值
    for (let i = left; i <= right; i++) {
      if (nums[i] > max) {
        max = nums[i];
      }
    }
    res.push(max);
    //左右边界加1
    left++;
    right++;
  }
  return res;
};

console.log(maxSlidingWindow(nums, k));;
