//输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。
//为简单起见，标点符号和普通字母一样处理。
//例如输入字符串"I am a student. "，则输出"student. a am I"。
/**
 * @param {string} s
 * @return {string}
 */
let s = "the sky    is blue";
var reverseWords = function (s) {
  return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
};

console.log(reverseWords(s));
