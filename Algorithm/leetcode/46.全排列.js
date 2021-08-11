/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [], path = []
  backtrack(nums, nums.length, [])
  return res

  function backtrack(m, n, used) {
    if(path.length === n) {
      res.push(Array.from(path))
      return
    }
    for(let i = 0; i < n; i++) {
      if(used[i]) continue
      path.push(m[i])
      used[i] = true;
      backtrack(m, n, used);
      path.pop();
      used[i] = false;
    }
  }
};

console.log(permute([1,2,3]));
// @lc code=end
