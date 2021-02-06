//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
//同时保持非零元素的相对顺序。

//输入: [0,1,0,3,12]
//输出: [1,3,12,0,0]

function hand(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      len--;
    }
  }

  return nums;
}

let nums = [0, 1, 0, 3, 12];

hand(nums);
