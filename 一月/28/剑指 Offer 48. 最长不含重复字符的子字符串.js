//请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

/**
 * @param {string} s
 * @return {number}
 */

//滑动窗口
var lengthOfLongestSubstring = function (s) {
  let stack = [];
  let max = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    let temp = s[i];
    let index = stack.indexOf(temp);
    stack.push(temp);
    if (index !== -1) {
      stack = stack.slice(index + 1);
    }
    max = Math.max(stack.length, max);
  }

  return max;
};
const s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));
