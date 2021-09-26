/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let ans = -Infinity;
  function dfs(node) {
    if (!node) return null;
    let leftSum = Math.max(dfs(node.left), 0);
    let rightSum = Math.max(dfs(node.right), 0);
    let gain = Math.max(leftSum, rightSum, leftSum + rightSum) + node.val;
    ans = Math.max(ans, gain);
    return Math.max(leftSum, rightSum) + node.val;
  };
  dfs(root);
  return ans;
};
// @lc code=end

