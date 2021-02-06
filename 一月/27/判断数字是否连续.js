//实现一个函数，判断一组数字是否连续。当出现连续数字的时候以‘-’输出。
//如： const arr = [ 2, 3, 4, 7, 8, 9, 10,13,15] 期望结果：["2-4", "7-10", 13, 15]

function computed(arr) {
  let results = [];
  let len = arr.length;
  let temp = [];
  for (let i = 0; i < len; i++) {
    if (temp.length === 0) {
      temp.push(arr[i]);
    } else {
      if (arr[i] - temp[temp.length - 1] != 1) {
        if (temp.length === 1) {
          results.push(temp.pop());
        } else {
          let str = temp.shift() + "-" + temp.pop();
          results.push(str);
          temp = [];
        }
        i--;
      } else {
        temp.push(arr[i]);
      }
    }
  }
  if (temp.len <= 1) {
    results.push(...temp);
  } else {
    results.push(temp.shift() + "-" + temp.pop());
  }
  console.log(results);
}
computed([1, 2, 3, 4, 6, 7, 8, 9, 10, 13, 15, 17, 19, 20]);
