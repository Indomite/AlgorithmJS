/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let len = nums.length;
  if(len === 0) return 0;
  let res = Infinity;
  for(let i = 0; i < len; i++) {
    let sum = 0;
    for(let j = i; j < len; j++) {
      sum = sum + nums[j];
      // 滑动窗口
      if(sum >= target) {
        res = Math.min(res, j - i + 1);
        break;
      }
    }
  }
  return res == Infinity ? 0 : res;
};

// @lc code=end

