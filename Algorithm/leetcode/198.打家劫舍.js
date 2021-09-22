/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length;
  let dp = new Array(n).fill(-1);
  function dfs(i) {
    if(i >= n) return 0;
    if(dp[i] != -1) return dp[i];
    let left = dfs(i+1)
    let right = dfs(i+2)
    dp[i] = Math.max(left, right+nums[i])
    return dp[i];
  }
  return dfs(0)
};
// @lc code=end

