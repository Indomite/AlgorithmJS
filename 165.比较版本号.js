/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.');
  version2 = version2.split('.');
  let n = Math.max(version1.length,version2.length)
  for(let i = 0;i < n;i++){
    let code1 = (version1[i] === undefined) ? 0 : parseInt(version1[i]);
    let code2 = (version2[i] === undefined) ? 0 : parseInt(version2[i]);
    if(code1>code2){
        return 1
    }else if(code1<code2){
        return -1
    }
  }
  return 0;
};
console.log(compareVersion("1.01","1.001"))
// @lc code=end

