/* 
  单链表
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = new Node();
  }

  // 显示节点
  // 思路：遍历，输出
  dispatch() {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // 头插法
  // 思路：将结点从头部插入
  headInsert(value) {
    let currentNode = this.head
    const newNode = new Node(value)
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 尾插法
  // 思路：将结点在尾部插入
  tailInsert(value) {
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(value)
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 删除节点
  // 思路：让当前节点的前一个结点的指针指向后一个结点
  remove(value) {
    let prev = this.head
    let currentNode = this.head
    while (currentNode !== null && currentNode.value !== value) {
      prev = prev.next
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('元素不存在');
      return
    }
    prev.next = currentNode.next;
  }

  // 变量查找
  // 思路：通过遍历寻找是否存在相等的值
  findByValue(value) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode !== null) {
      console.log(currentNode);
    } else {
      console.log(`${el} 不存在`);
    }
  }

  // 链表反转
  // 思路：递归分解，改变指针方向，回归
  reverseList(head) {
    if (head == null || head.next == null) {
      return head;
    }
    const newHead = reverseList(head.next);
    // head.next指的是下一个结点，指针反转
    head.next.next = head;
    // 把中间的指针释放
    head.next = null;
    return newHead;
  };

  // 迭代方式
  // 思路：双指针方式，两个指针向后移动，其间改变指针方向
  reverseList2(head) {
    let prev = null
    let currentNode = head
    while (currentNode) {
      const next = currentNode.next
      currentNode.next = prev
      prev = currentNode
      currentNode = next
    }
    return prev
  }

  // 链表是否有环
  // 思路: 快慢指针，相遇的话就是有环
  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) return true
    }
    return false
  }

  // 删除链表倒数第n个结点
  // 思路: 先反转, 遍历删除第n个结点, 再反转回去
  removeByIndexFromEnd(index) {
    if (this.checkCircle()) return
    this.revertList()
    let pos = 1
    let prevNode = this.head
    let currentNode = this.head.next
    while (currentNode !== null && pos < index) {
      prevNode = prevNode.next
      currentNode = currentNode.next
      pos++
    }
    if (currentNode === null) {
      console.log('该结点不存在')
      return false
    }
    prevNode.next = currentNode.next
    this.revertList()
  }

  // 求链表的中间结点
  // 思路: 快结点走两步, 慢结点走一步, 快结点走完慢结点即为中间结点(可扩展求n分之一结点)
  findMiddleNode() {
    let fast = this.head.next
    let slow = this.head.next
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }

  // 合并两个排序的链表
  // 思路：递归思路，两个链表的value相比较，出口就是某一个为空
  mergeTwoLists(ListA, ListB) {
    if (ListA == null) return ListB;
    if (ListB == null) return ListA;
    if (ListA.val < ListB.val) {
      ListA.next = mergeTwoLists(ListA.next, ListB);
      return ListA;
    } else {
      ListB.next = mergeTwoLists(ListA, ListB.next);
      return ListB;
    }
  }
}

exports.LinkList = LinkList