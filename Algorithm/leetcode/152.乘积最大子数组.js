/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  let dpMax = [];
  dpMax[0] = nums[0];
  let dpMin = [];
  dpMin[0] = nums[0];
  max = dpMax[0]
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(nums[i], Math.max(dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i]))
    dpMin[i] = Math.min(nums[i], Math.min(dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i]))
    max = Math.max(max, dpMax[i]);
  }
  return max
};
// @lc code=end

