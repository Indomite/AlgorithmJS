/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let res = 0;
  function backtrack (nums, target, index, sum) {
    if(index === nums.length) {
      if(sum === target) {
        res++;
      }
    } else {
      backtrack(nums, target, index + 1, sum + nums[index])
      backtrack(nums, target, index + 1, sum - nums[index])
    }
  }
  backtrack(nums, target, 0, 0);
  return res;
};
// @lc code=end

