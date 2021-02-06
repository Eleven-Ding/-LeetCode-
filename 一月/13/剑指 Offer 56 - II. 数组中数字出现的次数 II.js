//在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [3, 4, 3, 3];
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = 1;
    } else {
      if (obj[nums[i]] === 2) {
        delete obj[nums[i]];
      } else obj[nums[i]] = obj[nums[i]] + 1;
    }
  }
  return Object.keys(obj)[0];
};

console.log(singleNumber(nums));
