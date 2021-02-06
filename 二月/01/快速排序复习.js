function quickSort(arr) {
  if (arr.length == 0) {
    return arr;
  }
  const middlePoint = Math.floor(arr.length / 2);

  let left = [];
  let right = [];
  const middle = arr.splice(middlePoint, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > middle ? right.push(arr[i]) : left.push(arr[i]);
  }

  return [...quickSort(left), middle, ...quickSort(right)];
}

console.log(quickSort([5, 4, 7, 34, 52, 26, 7]));
