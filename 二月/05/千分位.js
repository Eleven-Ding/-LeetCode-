function check(num) {
  let str = String(num).split("");

  const index = str.indexOf(".");
  let end = [];
  if (index != -1) {
    end = str.slice(index);
    str = str.slice(0, index);
  }
  let stack = [];
  let count = 0;
  //从后面循环开始
  for (let i = str.length - 1; i >= 0; i--) {
    stack.unshift(str[i]);
    count++;
    if (count % 3 == 0 && i != 0) {
      stack.unshift(",");
    }
  }

  return stack.join("") + end.join("");
}

let num = 9814237654321.21;

console.log(check(num));
