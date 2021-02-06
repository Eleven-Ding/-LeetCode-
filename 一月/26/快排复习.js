function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let leftArr = [];
  let rightArr = [];
  let middlePoint = Math.floor(arr.length / 2);
  let middle = arr.splice(middlePoint, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), middle, ...quickSort(rightArr)];
}
let arr = randomNumbers();
console.log(arr);

console.log(quickSort(arr));
function randomNumbers() {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random() * 1000));
  }
  return arr;
}
