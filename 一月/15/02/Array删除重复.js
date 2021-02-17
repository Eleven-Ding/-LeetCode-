Array.prototype._delete = function () {
  let arr = this;

  let final = [];
  let middle = [];
  
  for (let i = 0; i < arr.length; i++) {
    let index = middle.findIndex((item) => item === arr[i]);
    if (index === -1) {
      middle.push(arr[i]);
    } else {
      final.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }

  return final;
};

let array = [1, 2, 3, 4, 5, 5, 5, 6];

console.log(array._delete());
console.log(array);
