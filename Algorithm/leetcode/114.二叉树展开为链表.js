/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let prev = null;
  function dfs(root) {
    if(!root) return ;
    if(prev){
      prev.right = root;
    }
    prev = root;
    let right = root.right;
    dfs(root.left)
    dfs(right)
    root.left = null
  }
  dfs(root)
};
// @lc code=end

