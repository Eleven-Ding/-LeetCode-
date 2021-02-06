//合并两个有序的数组
function merge(arr1, arr2) {
  let newArr = [];
  let i = 0,
    j = 0;
  const len1 = arr1.length;
  const len2 = arr2.length;
  while (i < len1 && j < len2) {
    arr1[i] > arr2[j] ? newArr.push(arr2[j++]) : newArr.push(arr1[i++]);
  }
  while (i < len1) {
    newArr.push(arr1[i++]);
  }
  while (j < len2) {
    newArr.push(arr2[j++]);
  }
  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //拆分成左右2部分
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([1, 2, 543, 6, 457, 568, 679,-1, 70, 8]));
//[  1,   2,   6,   8, 70,457, 543, 568, 679]
