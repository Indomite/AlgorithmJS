/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return help(inorder)
  function help(inorder) {
    if (!inorder || !inorder.length) return null
    let top = preorder.shift(), p = inorder.indexOf(top)
    let root = new TreeNode(top)
    root.left = help(inorder.slice(0, p))
    root.right = help(inorder.slice(p + 1))
    return root
  }
};
// @lc code=end

