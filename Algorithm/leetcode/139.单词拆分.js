/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  let n = s.length;
  let dp = new Array(n+1).fill(false);
  dp[0] = true;
  for(let i = 1; i <= n; i++) {
    for(let j = 0; j < i; j++) {
      if(dp[j] && wordDict.indexOf(s.substr(j, i-j)) > -1) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};
// @lc code=end
