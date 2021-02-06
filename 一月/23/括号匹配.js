// const str = "({[]})";
const str = "{[()]}";
//进阶 有优先级关系
//利用两个栈 一个栈存左边一个栈遍历
function check(str) {
  let right = [];
  let left = str.split("");

  for (let i = 0; i < left.length; i++) {
    let item = left[i];

    let now = null;
    switch (item) {
      case "{":
        right.push(item);
        break;
      case "[":
        //检查右边还有没有{
        for (let j = i; j < left.length; j++) {
          if (left[j] == "{") {
            return false;
          }
        }
        right.push(item);
        break;
      case "(":
        for (let j = i; j < left.length; j++) {
          if (left[j] == "{" || left[j] === "[") {
            return false;
          }
        }
        right.push(item);
        break;

      case ")":
        now = right.pop();
        if (now != "(") {
          return false;
        }
        break;
      case "]":
        now = right.pop();
        if (now != "[") {
          return false;
        }
        break;
      case "}":
        now = right.pop();
        if (now != "{") {
          return false;
        }
    }
  }
  return true;
}

console.log(check(str));
