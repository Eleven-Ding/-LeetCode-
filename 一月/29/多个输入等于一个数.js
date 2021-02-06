function FindNumbersWithSum(array, sum) {
  // write code here
  let left = 0;
  let right = array.length - 1;
  let results = [];
  while (left <= right) {
    const item = array[left] + array[right];
    if (item === sum) {
      results.push([array[left], array[right]]);
      left++;
      right--;
    } else if (item > sum) {
      right--;
    } else {
      left++;
    }
  }

  if (results.length === 1) {
    return results[0];
  } else {
    let min = results[0][0] * results[0][1];
    let j = 0;
    for (let i = 1; i < results.length; i++) {
      let item = results[i][0] * results[i][1];
      if (item < min) {
        j = i;
        min = item;
      }
    }
    return results[j];
  }
}
console.log(FindNumbersWithSum([1, 2, 4, 7, 11, 15], 15));
