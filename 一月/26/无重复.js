//手撕一道很简单的算法 input:[1,2,3,3,2,4,5] output:[1,4,5]

function output(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.has(arr[i]) ? set.delete(arr[i]) : set.add(arr[i]);
  }
  console.log([...set]);
}

output([1, 2, 3, 3, 2, 4, 5]);
