let arr = [
  1,
  2,
  [1, [1, [1, 1, [1], [1, [1, [1, 1, [1]]]]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [1, [1, [1, 1, [1]]]],
  [
    3,
    [4, 5, 6, [1, 2, 5]],
    [1, [1, [1, 1, [1]]]],
    [1, [1, [1, 1, [1]]]],
    [1, [1, [1, 1, [1]]]],
    [1, [1, [1, 1, [1]]]],
  ],
];

//方法一 循环递归

function flat1(arr) {
  let newArr = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      newArr = newArr.concat(flat1(i));
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}
console.time("flat1");
console.log(flat1(arr));
console.timeEnd("flat1");

//方法二  使用 [].flat

console.time("[].flat");
console.log(arr.flat(Infinity));
console.timeEnd("[].flat");

//使用生成器

function* flat3(arr) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (typeof item !== "number") {
      yield* flat3(item);
    } else {
      yield item;
    }
  }
}
console.time("生成器");
let newArr = [];
let i = 0;
for (let item of flat3(arr)) {
  newArr[i++] = item;
}
console.log(newArr);
console.timeEnd("生成器");
