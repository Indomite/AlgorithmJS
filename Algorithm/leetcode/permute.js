// 全排列

/* 
  回溯法
*/

var permute = function (nums) {
  let result = []
  let path = []
  // 当路径的长度与数组长度相等的时候，返回结果
  function backtracing(used) {
    if (path.length === nums.length) {
      result.push(path.slice(0))
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 当前数组中的数字已经被用过了
      if (used[nums[i]]) {
        continue
      }
      // 标识数字使用的状态
      used[nums[i]] = true
      path.push(nums[i])
      // 回溯
      backtracing(used)
      path.pop()
      used[nums[i]] = false
    }
  }
  backtracing([])
  return result
};

console.log(permute([1, 2, 3]));
