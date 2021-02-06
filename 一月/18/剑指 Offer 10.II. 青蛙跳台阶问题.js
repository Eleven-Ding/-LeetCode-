/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  return fib(n)
};

function fib(n,sum1=1,sum2=1){
  if(n<=1){
    return sum2
  }
  return fib(n-1,sum2,(sum1+sum2)%1000000007)
}

console.log(numWays(2));