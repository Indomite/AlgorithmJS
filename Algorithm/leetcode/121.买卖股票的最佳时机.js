/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  let minPrice = Infinity
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > res) {
      res = prices[i] - minPrice
    }
  }
  return res;
};
// @lc code=end

