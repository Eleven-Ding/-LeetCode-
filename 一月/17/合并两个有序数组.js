let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6];

function merge(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;
  let newArr = [];
  let i = 0,
    j = 0;

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i++]);
    } else {
      newArr.push(arr2[j++]);
    }
  }
  if (i === len1) {
    while (j < len2) {
      newArr.push(arr2[j++]);
    }
  }
  if (j === len2) {
    while (i < len1) {
      newArr.push(arr1[i++]);
    }
  }

  return newArr;
}

merge(arr1, arr2);

//通过合并两个有序数组实现归并排序

let arr = [32, 4, 634, 7, 72, 41, 4146, 6, 5474];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.ceil(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));
