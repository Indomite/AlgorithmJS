/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = new Map();
  nums.forEach(item => {
    map.set(item, map.has(item) ? map.get(item)+1 : 1);
  })
  for (let [key, value] of map.entries()) {
    if(value > nums.length/2) return key;
  }
};
// @lc code=end

