/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 *
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。
 * 请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
 */
let nums = [4, 1, 4, 6];
var singleNumbers = function (nums) {
  let arr = [];

  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let item = nums.shift();
    let index = nums.findIndex((item1) => item === item1);
    if (index === -1) {
      arr.push(item);
    } else {
      nums.splice(index,1);
    }
    if (arr.length === 2) {
      return arr;
    }
  }
  return arr;
};

console.log(singleNumbers(nums));
