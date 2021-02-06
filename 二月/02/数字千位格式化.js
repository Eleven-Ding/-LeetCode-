//123456789

function qian(num) {
  let str = String(num);

  //查找 .
  let [arr, end] = str.split(".");
  arr = arr.split("");
  let newArr = [];
  let count = 0;
  //然后对arr进行逆向的处理 3位加一个逗号
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.unshift(arr[i]);
    count++;
    if (count % 3 == 0 && i != 0) {
      newArr.unshift(",");
    }
  }
  console.log(newArr.join("") + "" + (end ? `.${end}` : ""));
}
qian(1234569.93);
