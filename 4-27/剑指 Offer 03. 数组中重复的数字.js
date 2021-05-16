/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，
 * 也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 */
var findRepeatNumber = function (nums) {

    //只要重复了就结束
    const set = new Set();
    for (let i of nums) {
        //判断是否存在
        if (!set.has(i)) {
            set.add(i)
        }else{
            return i
        }
    }
};