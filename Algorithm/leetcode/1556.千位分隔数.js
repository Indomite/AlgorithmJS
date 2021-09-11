/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
/* var thousandSeparator = function(n) {
  let res = n.toLocaleString().replace(/,/g,'.')
  return res
}; */

var thousandSeparator = function(n) {
  let reg=/\d{1,3}(?=(\d{3})+$)/g; 
  return String(n).replace(reg, '$&.');
};
// @lc code=end

