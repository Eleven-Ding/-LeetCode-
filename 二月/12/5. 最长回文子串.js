//给你一个字符串 s，找到 s 中最长的回文子串。

/**
 * @param {string} s
 * @return {string}
 */

//输入：s = "babad"
// 输出："bab"

var longestPalindrome = function (s) {
  let arr = s.split("");

  let i = 0;
  while (arr.length) {
    let temp = [...arr]
    if (temp.join("") == temp.reverse().join("")) {
      return arr.join("");
    }
    if (i % 2 == 0) {
      arr.shift();
      // console.log(arr, "shift");
    } else {
      arr.pop();
      // console.log(arr, "pop");
    }
    i++;
  }
};
let s = "ac"

console.log(longestPalindrome(s));
