function InsertSort(arr) {
  let j;
  for (let i = 1; i < arr.length; i++) {
    const p = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > p; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = p;
  }
}

const arr = [1, 2, 5, 34, 6, 5, 475, 85, 87];
InsertSort(arr);
console.log(arr);
