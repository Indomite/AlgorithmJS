/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while(l <= r){
    let mid = Math.floor((l + r) / 2);
    if(target == nums[mid]){
      return mid
    }
    nums[mid] < target ? l = mid + 1 : r = mid - 1
  }
  return -1
};
// @lc code=end

