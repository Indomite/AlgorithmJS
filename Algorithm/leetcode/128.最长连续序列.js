/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();
  for (const num of nums) set.add(num);
  let res = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let len = 1;
      let curNum = num;
      while (set.has(++curNum)) {
        len++;
      }
      res = Math.max(res, len);
    }
  }
  return res;
};
// @lc code=end
