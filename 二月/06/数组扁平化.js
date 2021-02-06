function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (Array.isArray(item)) {
      newArr.push(...flatten(item));
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}
let arr = [1, 2, [1, [1, [1, 1, [1], [1, [1, [1, 1, [1]]]]]]]];

// console.log(flatten(arr));

function* flatten2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      yield* flatten2(item);
    } else {
      yield item;
    }
  }
}

// for(let i of  flatten2(arr)){
//   console.log(i);
// }

console.log(arr.flat(Infinity));
