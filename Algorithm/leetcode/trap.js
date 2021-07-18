// 接雨水

/* 
  动态规划
  https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode-solution-tuvc/
*/

var trap = function(height) {
  const n = height.length;
  if (n == 0) {
      return 0;
  }

  const leftMax = [];
  leftMax[0] = height[0];
  // 设置左侧最大高度
  for (let i = 1; i < n; ++i) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  const rightMax = [];
  rightMax[n - 1] = height[n - 1];
  // 设置右侧最大高度
  for (let i = n - 2; i >= 0; --i) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let ans = 0;
  // 得到可以盛水的量
  for (let i = 0; i < n; ++i) {
      ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
