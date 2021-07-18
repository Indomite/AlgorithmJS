/* 
  33.搜索旋转排序数组
*/

// 暴力解
/* var search = function(nums, target) {
  for(let i=0;i < nums.length;i++) {
    if(nums[i] === target) {
      return i
    }
  }
  return -1
}; */

//二分法
var search = function (nums, target) {
  if (!nums || nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    // 首尾中全部验证
    if (nums[mid] === target) return mid;
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;
    // 前半部分有序
    if (nums[start] < nums[mid]) {
      if (nums[start] < target && target < nums[mid]) {
        end = mid - 1;
      } else {
        // 目标值存在于后半段
        start = mid + 1;
      }
    } else {
      // 后半部分有序
      if (nums[mid] < target && target < nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2],0));
