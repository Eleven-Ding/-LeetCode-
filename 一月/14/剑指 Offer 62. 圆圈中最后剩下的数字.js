//0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

//例如，0、1、2、3、4这5个数字组成一个圆圈，
//从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

//约瑟夫环问题

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

var lastRemaining = function (n, m) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
    //1代表没有删除 0代表删除
  }

  let index = (m - 1) % arr.length;

  while (arr.length > 1) {
    arr.splice(index, 1);
    index = (index + m - 1) % arr.length;
  }
  return arr[0];
};
// lastRemaining(5, 3);

function pp(n, m) {
  var pos = 0; // 最终活下来那个人的初始位置
  for (var i = 2; i <= n; i++) {
    pos = (pos + m) % i; // 每次循环右移
  }
  return pos;
}

console.log(pp(5, 3));
