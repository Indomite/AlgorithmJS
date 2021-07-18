/* 
  下一个排列

  解法：从右边开始寻找第一个比左边的树更大的树，然后将右边的数递增排序
*/

var nextPermutation = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    // 当数组不是递减的
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  // 实现右边的数递增
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
  return nums
};

console.log(nextPermutation([1, 2, 3]));
