//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
//使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [1, 2, 3, 4,4,5,6,7,8];
//用j来记录右边的位置 
//用i来扫描
var exchange = function (nums) {
  const len = nums.length;
  for (let i = 0, j = len - 1;i < j; i++) {
    if ((nums[i] & 1) === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i--;
      j--;
    }
  }

  return nums;
};
exchange(nums);
