//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
//s = "abaccdeff" 返回 "b"

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const len = s.length;

  if (len === 0) {
    return " ";
  }
  let obj = {};

  for (let i = 0; i < len; i++) {
    let item = s[i];

    if (!obj.hasOwnProperty(item)) {
      obj[item] = 1;
    } else {
      obj[item] = -1;
    }
  }
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] == 1) {
      return keys[i];
    }
  }
  return " "
};
console.log(firstUniqChar("leetcode"));
