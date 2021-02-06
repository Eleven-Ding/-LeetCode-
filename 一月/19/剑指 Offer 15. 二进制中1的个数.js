/**
 * @param {number} n - a positive integer
 * @return {number}
 */

 //请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。例如，
 //把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。



 //利用n&(n-1)可以去掉最后一个1
var hammingWeight = function(n) {
  let count = 0;
while (n !== 0) {
n = n & (n - 1);
count++;
}

return count;


};