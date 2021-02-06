// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  //用这两个记录最大值和最小值的坐标
  let min = Number.MAX_VALUE;
  let profile = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profile) {
      profile = prices[i] - min;
    }
  }
  return profile;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
