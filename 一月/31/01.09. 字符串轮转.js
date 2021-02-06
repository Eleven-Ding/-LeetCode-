//字符串轮转。给定两个字符串s1和s2，
//请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  return s1.length === s2.length && (s2 + s2).includes(s1)
};

let s1 = "waterbottle",
  s2 = "erbottlewat";

console.log(isFlipedString(s1, s2));
