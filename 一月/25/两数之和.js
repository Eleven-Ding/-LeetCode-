var twoSum = function (nums, target) {
  let len = nums.length;
  let map = new Map();
  for (let i = 0; i < len; i++) {
    let pre = target - nums[i];
    console.log(pre);
    if (map.has(pre)) {
      return [map.get(pre), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
console.log(twoSum([3, 2, 4], 6));
