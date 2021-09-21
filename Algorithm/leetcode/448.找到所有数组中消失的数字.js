/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let map = new Map();
  let res = [];
  nums.forEach(item => { map.set(item, 1) })
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      res.push(i)
    }
  }
  return res
};
// @lc code=end

