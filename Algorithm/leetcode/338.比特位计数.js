/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) { // 偶数
      dp[i] = dp[i / 2];
    }
    else { // 奇数
      dp[i] = dp[(i - 1)] + 1;
    }
  }
  return dp
};
// @lc code=end

