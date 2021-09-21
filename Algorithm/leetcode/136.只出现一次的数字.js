/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  nums.forEach(item => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  })
  for (let [key, val] of map.entries()) {
    if (val === 1) return key;
  }
};
// @lc code=end

