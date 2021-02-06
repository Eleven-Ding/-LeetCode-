// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳

const Jump = function (n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return arguments.callee(n - 1) + arguments.callee(n - 2);
  }
};

console.log(Jump(30));


//想使用尾递归 但没成
// function BetterJump(pre, n) {
//   if (n === 1 || n === 0) {
//     return pre;
//   } else {
//     return BetterJump(n - 2, n - 3);
//   }
// }
// console.log(BetterJump(0,10));
