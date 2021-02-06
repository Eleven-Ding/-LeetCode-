//输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。
//如果有多对数字的和等于s，则输出任意一对即可。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [1, 2, 3, 4, 5, 6, 7, 11, 15],
  target = 9;
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let num = nums[left] + nums[right];
    if (num === target) {
      return [nums[left], nums[right]];
    } else {
      if (num > target) {
        right--;
      } else {
        left++;
      }
    }
  }
};

console.log(twoSum(nums, target));;
