/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  return quickSort(arr).slice(0, k);
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

    return quickSort(left).concat([middle], quickSort(right));
  }
};
