/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 冒泡排序
/* var sortArray = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums
}; */

// 选择排序
/* var sortArray = function(nums) {
  let len = nums.length
  for(let i = 0; i < len; i++) {
    minIndex = i
    for(let j = i; j < len; j++) {
      if(nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }
    if(i !== minIndex){
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
  }
  return nums
}; */

// 插入排序
/* var sortArray = function(nums) {
  const length = nums.length
  // 需要从1开始
  for(let i = 1; i < length; i++){
      let j = i
      let tempValue = nums[i]  // 获取要比较的值
      while(j > 0 && nums[j - 1] > tempValue){
          nums[j] = nums[j - 1]
          j--
      }
      nums[j] = tempValue
  }
  return nums
}; */

// 快速排序
var sortArray = function(nums) {
  if( nums.length <= 1 ) return nums
  let left = []
  let right = []
  let pivotIndex  = Math.floor(nums.length / 2) 
  let pivotValue =  nums.splice(pivotIndex,1)[0]
  for(let i = 0; i < nums.length; i++ ){
      if(nums[i] > pivotValue){
          right.push(nums[i])
      }else{
          left.push(nums[i])
      }
  }
  return sortArray(left).concat(pivotValue,sortArray(right))
};

console.log(sortArray([1,5,3,4,9]));
// @lc code=end

