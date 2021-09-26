/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let map = new Map()
  let res = 0
  for (let char of chars) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }
  for (let word of words) {
    if (isOk(word, new Map(map))) {
      res += word.length
    }
  }
  return res

};
function isOk(word, map) {
  for (let item of word) {
    if (map.has(item) && map.get(item) > 0) {
      map.set(item, map.get(item) - 1)
    } else {
      return false
    }
  }
  return true
}
// @lc code=end

