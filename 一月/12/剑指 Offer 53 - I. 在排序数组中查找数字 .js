// let a = 7;
// let b = 5;
// console.time("a+b");
// console.log((a + b) / 2);
// console.timeEnd("a+b");

// console.time("a+(b-a)");
// console.log(a + (b - a) / 2);
// console.timeEnd("a+(b-a)");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//统计一个数字在排序数组中出现的次数。
//这个使用排序数组  肯定要好好使用这个排好序了的
let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
var search = function (nums, target) {
  let count = 0;
  let i;
  for (i = 0; i < nums.length && nums[i] < target; i++);
  for (; i < nums.length && nums[i] === target; i++, count++);

  return count;
};

//二分查找
function divideSearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
}

// console.log(search(nums, target));

//使用二分查找的思想
var search1 = function (nums, target) {
  const length = nums.length;
  let start = -1,
    end = -1;

  let left = 0,
    right = length - 1;
  // 找到左边界：找到第一次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1; // important
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  left = 0;
  right = length - 1;
  // 找到右边界：找到第2次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1; // important
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return start <= end && start !== -1 ? end - start + 1 : 0;
};

console.log(search1(nums, target));
