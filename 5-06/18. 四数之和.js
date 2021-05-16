//给定一个包含 n 个整数的数组 nums 和一个目标值 target，
//判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？
//找出所有满足条件且不重复的四元组。
//输入：nums = [1,0,-1,0,-2,2], target = 0
//输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


const nums = [1, 5, -1, -2, 2, 0, 3, -4,3], target = 5;
var fourSum = function (nums, target) {
    let arr = [];
    let sum = 0;
    nums = [...new Set(nums)]
    nums.sort((a, b) => {
        return a - b
    })
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (i < 4) {
            sum += nums[i];
        } else {

        }
    }
};
fourSum(nums, target)