/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内
 * 。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 */
//就是找到第一个不等于自己的那个数  然后+1 
//在顺序中查找一个数  首先考虑二分查找
/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 9];
var missingNumber = function (nums) {
  let i;
  for (i = 0; i <= nums.length && nums[i] == i; i++);
  return i;
};

console.log(missingNumber(nums));

//使用二分法思想

var missingNumber1 = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right + 1;
};

console.log(missingNumber1(nums));
