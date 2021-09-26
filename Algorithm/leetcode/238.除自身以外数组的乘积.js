/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var left = []
  var right = []
  for (let i = 0; i < nums.length; i++) {
    left[i] = i > 0 ? nums[i - 1] * left[i - 1] : 1
    right[nums.length - 1 - i] = i > 0 ? nums[nums.length - i] * right[nums.length - i] : 1
  }
  return nums.map(function (v, i) {
    return left[i] * right[i]
  })
}
// @lc code=end

