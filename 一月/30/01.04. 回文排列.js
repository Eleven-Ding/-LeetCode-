//给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

//回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

//回文串不一定是字典当中的单词。

/**
 * @param {string} s
 * @return {boolean}
 */
//所有都必须出现偶数次  最多一个奇数次
var canPermutePalindrome = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let item = s[i];

    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  //遍历一次  判断值的奇数的个数
  let i = 0;
  map.forEach((item) => {
    console.log(item);
    if (item & 1) {
      i++;
    }
  });
  if (i > 1) {
    return false;
  }
  return true;
};

canPermutePalindrome("code");
