/* 
  最长有效括号
*/

var longestValidParentheses = function(s) {
  let maxLen = 0
  const stack = []
  stack.push(-1)
  // 遍历字符串
  for (let i=0; i<s.length; i++) {
    const cur = s[i]
    if (cur === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length) {
        const curMaxLen = i - stack[stack.length - 1]
        maxLen = Math.max(maxLen, curMaxLen);
      } else {
        stack.push(i)
      }
    }
  }
  return maxLen
};

console.log(longestValidParentheses("(()"));
