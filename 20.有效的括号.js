/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stacks = [];
  for(let i = 0; i < s.length; i++) {
    let c = s[i];
    switch (c) {
      case '(':
        stacks.push(')')
        break;
      case '{':
        stacks.push('}')
        break;
      case '[':
        stacks.push(']')
        break;
      default:
        if(c !== stacks.pop()){
          return false;
        }
    }
  }
  return stacks.length === 0
};
console.log(isValid('{[]}'));
// @lc code=end

