//在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
//输入一个数组，求出这个数组中的逆序对的总数。
/**
 * 输入: [7,5,6,4]
 * 输出: 5   7>5 7>6 7>4 5>4 6>4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arr = [7, 5, 6, 4];
var reversePairs = function (nums) {
  let count = {
    a: 0,
  };
  mergeSort(nums, count);
  console.log(count.a);
  return count.a;
};

function Merger(left, right, count) {
  let res = [];
  let leftLen = left.length;
  let rightLen = right.length;
  let len = leftLen + rightLen;
  for (let index = 0, i = 0, j = 0; index < len; index++) {
    if (i >= leftLen) res[index] = right[j++];
    else if (j >= rightLen) res[index] = left[i++];
    else if (left[i] <= right[j]) res[index] = left[i++];
    else {
      res[index] = right[j++];
      count.a = count.a + leftLen - i;
    }
  }
  return res;
}
function mergeSort(nums, count) {
  if (nums.length < 2) return nums;
  const mid = parseInt(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return Merger(mergeSort(left, count), mergeSort(right, count), count);
}

reversePairs(arr);
