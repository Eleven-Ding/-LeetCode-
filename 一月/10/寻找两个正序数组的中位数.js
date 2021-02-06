/**
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的中位数。
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

let nums1 = [1, 3],
  nums2 = [2];
var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  });

  const middle = (newArr.length - 1) / 2;
  let result;
  if (middle % 1 !== 0) {
    result = (newArr[Math.floor(middle)] + newArr[Math.ceil(middle)]) / 2;
  } else {
    result = newArr[middle];
  }
  return result.toFixed(5);
};

console.log(findMedianSortedArrays(nums1, nums2));
