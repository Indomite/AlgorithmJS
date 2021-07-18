// 跳跃游戏

/* 
  通过查看所能覆盖的范围，当覆盖的范围能够包含终点的时候，说明就是可以到达终点的
  也就是说将为题转化成了连续长度的问题
*/

var canJump = function (nums) {
  if (nums.length === 1) return true
  let cover = 0
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i])
    if (cover >= nums.length - 1) {
      return true
    }
  }
  return false
};

console.log(canJump([2, 3, 1, 1, 4]));
