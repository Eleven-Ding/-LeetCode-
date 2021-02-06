//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

//有效字符串需满足：

//左括号必须用相同类型的右括号闭合。
//左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    switch (item) {
      case "(":
      case "[":
      case "{":
        stack.push(item);
        break;
      case ")":
        if (stack.pop() != "(") {
          return false;
        }
        break;
      case "]":
        if (stack.pop() != "[") {
          return false;
        }
        break;
      case "}":
        if (stack.pop() != "{") {
          return false;
        }
        break;
    }
  }
  return stack.length == 0;
};
let str = "()[]{}";

console.log(isValid(str));
