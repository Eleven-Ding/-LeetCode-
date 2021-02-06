let str = "1QEjTeEpG6".split("")
let n = 8;
let stack = [
  [5,1],
  [5,5],
  [9,3],
  [6,7],
  [2,17],
  [3,25],
  [47,7],
  [7,18]
];

while (stack.length) {
  let [p, l] = stack.shift();
  let newArr = str.slice(p, p+l).reverse();
  str.splice(p+l,0,...newArr)
}

console.log(str.join(""));
//
