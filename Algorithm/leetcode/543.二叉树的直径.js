/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
  let res = 0;
  depth(root);
  return res;
  function depth(node) {
    if(!node) return 0;
    let left = depth(node.left);
    let right = depth(node.right);
    res = Math.max(left+right, res);
    return Math.max(left, right) + 1
  }
};
// @lc code=end

