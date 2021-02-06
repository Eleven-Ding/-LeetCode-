//实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

let s = "leetcode";

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  return new Set([...astr]).size === astr.length;
};
isUnique(s);
//超过100%
