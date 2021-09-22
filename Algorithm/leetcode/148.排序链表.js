/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
 let sortList = function(head) {
  return mergeSortRec(head)
}

let mergeSortRec = function (head) {
  if(!head || !head.next) {
      return head
  }
  // 获取中间节点
  let middle = middleNode(head)
  // 分裂成两个链表
  let temp = middle.next
  middle.next = null
  let left = head, right = temp
  left = mergeSortRec(left)
  right = mergeSortRec(right)
  return mergeTwoLists(left, right)
}

// 获取中间节点
let middleNode = function(head) {
  let fast = head, slow = head
  while(fast && fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
  }
  return slow
}

let mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(-1);
  let cur = preHead;
  while(l1 && l2){
      if(l1.val < l2.val){
          cur.next = l1;
          l1 = l1.next;
      }else{
          cur.next = l2;
          l2 = l2.next;
      }
      cur = cur.next;
  }
  cur.next = l1 || l2;
  return preHead.next;
}
// @lc code=end

