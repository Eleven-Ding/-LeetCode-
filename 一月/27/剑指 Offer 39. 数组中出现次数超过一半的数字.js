//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return quickSort(nums)[Math.floor(nums.length / 2)];
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let left = [];
    let right = [];
    let midPoint = Math.floor(arr.length / 2);
    const middle = arr.splice(midPoint, 1)[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] < middle ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSort(left).concat([pivot], quickSort(right));
  }
};

