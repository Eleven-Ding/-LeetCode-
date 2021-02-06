/**
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，
 * 其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积,
 * 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
 *  输入: [1,2,3,4,5]
 *  输出: [120,60,40,30,24]
 */

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let res = [];
  let p = 1;

  for (let i = 0; i < a.length; i++) {
    res[i] = p;
    p *= a[i];
  }
  p = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    res[i] *= p;
    p *= a[i];
  }
  return res;
};
constructArr([1, 2, 3, 4, 5]);
