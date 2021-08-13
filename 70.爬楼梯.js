/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let pre = 0, next = 0, res = 1
  for(let i = 0; i < n; i++) {
    next = pre
    pre = res
    res = pre + next
  }
  return res
};
console.log(climbStairs(3));
// @lc code=end

