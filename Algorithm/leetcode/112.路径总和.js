/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  function traverse(node, leaveNum) {
    if(leaveNum === 0 && !node.left && !node.right){
      return true
    }
    if(!node.left && !node.right){
      return false
    }
    if(node.left && traverse(node.left, leaveNum - node.left.val)) {
      return true
    }
    if(node.right && traverse(node.right, leaveNum - node.right.val)) {
      return true
    }
    return false
  }

  if (!root) return false;
  return traverse(root, targetSum - root.val);
};
// @lc code=end

