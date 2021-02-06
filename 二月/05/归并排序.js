function merge(arr1, arr2) {
  let newArr = [];
  let i = 0,
    j = 0,
    len1 = arr1.length,
    len2 = arr2.length;

  while (i < len1 && j < len2) {
    if (arr1[i] > arr2[j]) {
      newArr.push(arr2[j++]);
    } else {
      newArr.push(arr1[i++]);
    }
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
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

let arr = [1, 4, 7, 54, 3, 24, 2, 52, 453, 56, 54, 76, 8];

console.log(mergeSort(arr));
