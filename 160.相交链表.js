/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let ap = headA, bp = headB;
  while(ap !== bp) {
    if(ap === null) {
      ap = headB
    }else {
      ap = ap.next
    }
    if(bp === null) {
      bp = headA
    }else {
      bp = bp.next
    }
  }
  return ap
};
// @lc code=end

