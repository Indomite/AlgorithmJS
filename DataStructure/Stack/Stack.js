// 链表模拟栈

/* 
  思路：通过节点的指向实现先进后出，后进先出
*/

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Stack类中包含常用的API
class Stack {
  constructor() {
    this.top = null
  }

  // 入栈
  push (value) {
    const node = new Node(value)
    if(this.top === null) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }

  // 出栈
  pop () {
    if(this.top === null)
      return -1
    // 将顶部的值pop，节点指向下一个
    const value = this.top.value
    this.top = this.top.next
    return value
  }

  // 清栈
  clear () {
    this.top = null
  }

  // 遍历栈中的元素
  display () {
    if(this.top === null)
      return
    let temp = this.top
    while(temp !== null) {
      console.log(temp.value);
      temp = temp.next
    }
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log('----display----')
stack.display()
console.log('---------------')

exports.createStack = Stack
