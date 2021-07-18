//从尾到头打印链表
/* 
    整体思路：
    利用数组的反转函数，将链表中的每个元素放到数组中，然后反转
    或者说：直接在头部插入元素
    链表反转主要的思路还是通过栈实现，实现结果栈push中间栈的pop
*/

/* var reversePrint = function(head) {
    let res = []
    while(head){
        res.push(head.val)
        head = head.next
    }
    return res.reverse()
}; */

var reversePrint = function(head) {
    let res = []
    while(head){
        res.unshift(head.val)
        head = head.next
    }
    return res
};