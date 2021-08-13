/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length
  let res = 0
  for(let i = 0;i < len;i++) {
    let ans = []
    let maxLen = 0;
    let j = i
    while(j < len && ans.indexOf(s[j]) < 0) {
      ans.push(s[j])
      maxLen++
      j++
    }
    res = Math.max(res, maxLen)
  }
  return res
};
console.log(lengthOfLongestSubstring('pwwkew'));
// @lc code=end

