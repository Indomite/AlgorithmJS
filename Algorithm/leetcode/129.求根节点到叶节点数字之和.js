/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  return dfs(root, 0)
};
function dfs(root, preNum) {
  if(root === null) return 0
  const sum = preNum * 10 + root.val
  // 当前节点是叶子结点
  if(root.left == null && root.right == null) {
    return sum
  // 当前还是树枝节点
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
}
// @lc code=end

