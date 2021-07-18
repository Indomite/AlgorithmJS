// 34. 在排序数组中查找元素的第一个和最后一个位置

var searchRange = function(nums, target) {
  return [nums.indexOf(target),nums.lastIndexOf(target)]
};

console.log(searchRange([5,7,7,8,8,10],8));
