//请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
//输入: "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

const lengthOfLongestSubstring = function (s) {
  let stack = [];

  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    const index = stack.indexOf(s[i]);
    if (index === -1) {
      stack.push(s[i]);
    } else {
      stack = stack.slice(index + 1);
    }
    if (stack.length > newArr.length) {
      newArr = stack;
    }
  }
  return newArr.join("");
};
("abcabcbb");
console.log(lengthOfLongestSubstring("pwwkew"));
