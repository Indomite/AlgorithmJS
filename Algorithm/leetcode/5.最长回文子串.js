/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length < 2) return s
  let res = ''
  for(let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  function helper(m, n) {
    while(m >= 0 && n < s.length && s[m] == s[n]){
      m--
      n++
    }
    if (n -m- 1 > res.length) {
      res = s.slice(m + 1, n)
    }
  }
  return res
};
// @lc code=end

