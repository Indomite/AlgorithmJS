// 字符串匹配 --- 动态规划
var isMatch = function(s, p) {
  if(s == null || p == null) return false
  const sLen = s.length
  const pLen = p.length
  // 创建二维数组
  const dp = new Array(sLen + 1)
  // 一行置0
  for(let i = 0;i < dp.length; i++){
    dp[i] = new Array(pLen+1).fill(false)
  }
  // 初始事例
  dp[0][0] = true
  for(let j=1; j < pLen+1; j++){
    if(p[j-1] == '*')
      dp[0][j] = dp[0][j-2]
  }
  // 迭代部分
  for(let i=1;i < sLen+1;i++){
    for(let j=1;j < pLen+1;j++){
      // 相同位置的数字相等或者为 .
      if(s[i-1] == p[j-1] || p[j-1] == '.') {
        dp[i][j] = dp[i-1][j-1]
      // 不相等，但是下一个是 *
      } else if(p[j-1] == '*') {
        // 和前一个相等或者前一个是.
        if(s[i-1] == p[j-2] || p[j-2] == '.'){
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen];
};

console.log(isMatch('aa','a*'));
