var firstMissingPositive = function (nums) {
  if (nums.length === 0) {
    return 1;
  }
  let len = nums.length;
  let newNums = [...nums];
  //筛选大于等于1 小于等于len的  把对应的数值放到对应的位置 ，第一个不是的
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];

    if (item >= 1 && item < len) {
      newNums[item - 1] = item;
    }
  }
  console.log(newNums);

  for (let j = 0; j < newNums.length; j++) {
    if (newNums[j] != j + 1) {
      return j + 1;
    }
  }
  return nums.length + 1;
};
var arr = [1, 2, 0];
// console.log(firstMissingPositive(arr));

//测试解法

