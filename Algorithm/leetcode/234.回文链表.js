/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let str1 = '', str2 = '';
  while(head) {
    str1 = str1 + head.val;
    str2 = head.val + str2;
    head = head.next;
  }
  return str1 === str2;
};
// @lc code=end

