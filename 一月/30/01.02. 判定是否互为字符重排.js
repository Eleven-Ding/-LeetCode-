//给定两个字符串 s1 和 s2，请编写一个程序，
//确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
//如果s1中的字符都能在s2中找到 并且s1的长度==s2的长度 那么就可以
var CheckPermutation = function (s1, s2) {
  let len1 = s1.length;
  let len2 = s2.length;
  if (len1 < len2) return false;
  let map = new Map();
  //对1进行循环
  for (let i = 0; i < len1; i++) {
    const item = s1[i];
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  //对2进行循环
  for (let i = 0; i < len2; i++) {
    //没有找到 返回false
    let item = s2[i];
    if (!map.has(item)) {
      return false;
    }
    //找到了就删除一个  如果是最后一个了 就移除
    if (map.get(item) > 1) {
      map.set(item, map.get(item) - 1);
    } else {
      map.delete(item);
    }
  }
  return map.size === 0;
};
