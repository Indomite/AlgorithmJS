/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort(function(a, b) {
    return b - a
  })
  return nums[k-1]
};
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
// @lc code=end

