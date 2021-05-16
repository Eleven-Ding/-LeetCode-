// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
// 输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    return Math.min(numbers)
};

//使用二分查找
var minArray = function (numbers) {
    let left = 0, right = numbers.length;
    while (left != right) {
        let middle = parseInt((left + right) / 2)
        if (numbers[middle] > numbers[right]) {
            left = middle+1
        } else if (numbers[middle] < numbers[left]) {
            right = middle
        }else{
            right--
        }
    }
    return numbers[left]
};
console.log(minArray([3,1]));
