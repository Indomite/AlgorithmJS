/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }
  for(let i = 0; i < nums.length; i++) {
    let another = target - nums[i];
    if(map.has(another) && map.get(another) !== i) {
      return [i, map.get(another)]
    }
  }
};
console.log(twoSum([2,7,11,15],9));
// @lc code=end

