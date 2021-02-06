/**
 * [-4,1, 10, -1, -8, 3, 6, -9, 1]
 * [-4, -1,-8,-9,1,10,3,6,1]
 * 不允许新建数组、时间复杂度O(N)，调整后正数和负数部分的顺序无所谓
 */
const arr = [-4, 1, 10, -1, -8, 3, 6, -9, 1];

function Exchange(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
    arr.splice(i, 1);
    if (temp > 0) {
      arr.push(temp);
    } else if (temp < 0) {
      arr.unshift(temp);
    }
  }
}

Exchange(arr);

console.log(arr);
