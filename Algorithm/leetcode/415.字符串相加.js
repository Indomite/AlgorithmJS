/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length-1,j = num2.length-1,add = 0;
  let res = []
  while(i >= 0 || j >= 0 || add > 0) {
    let x = i >= 0 ? Number(num1.charAt(i)) : 0
    let y = j >= 0 ? Number(num2.charAt(j)) : 0
    let ans = x + y + add
    res.push(ans % 10);
    add = ans >= 10 ? 1 : 0
    i--
    j--
  }
  return res.reverse().join('');
};
console.log(addStrings('12355345','423472345'))
// @lc code=end

