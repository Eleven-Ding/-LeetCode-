/**
 * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
 * 你可以假设字符串中只包含大小写英文字母（a至z）。
 */

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  if (S.length <= 1) {
    return S;
  }
  let str = "";
  let arr = S.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (result.length == 0) {
      result.push(item);
    } else {
      if (result.indexOf(item) == -1) {
        str += result[0] + "" + result.length;
        result = [item];
      } else {
        result.push(item);
      }
    }
    if(i===arr.length-1){
      str += result[0] + "" + result.length;
    }
  }

  return str.length >= S.length ? S : str;
};
console.log(compressString("bbbac"));
