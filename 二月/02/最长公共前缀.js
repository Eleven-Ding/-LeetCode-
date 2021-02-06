function find(arr) {
  let str = "";
  const len = arr.sort((a, b) => {
    return a.length - b.length;
  })[0].length;

  let index = 0;
  let temp = "";
  let flag = true;
  while (index < len) {
    for (let i = 0; i < arr.length; i++) {
      if (temp == "") {
        temp = arr[i][index];

      } else {
        if (arr[i][index] != temp) {
          flag = false;
        }
      }
    }

    if (flag) {
      str += temp;
      temp = "";
      index++;
    } else {
      break;
    }
  }
  console.log(str);
  return str;
}
find(["flower", "flow", "floght"]);
