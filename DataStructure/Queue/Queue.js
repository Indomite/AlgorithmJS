class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 进队列
  entry(value) {
    if(this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  // 出队列
  outer() {
    if(this.head === null)
      return -1
    const value = this.head.value
    this.head = this.head.next
    return value
  }

  // 是否队列空
  isEmpty() {
    return this.head === null
  }

  // 遍历队列
  display() {
    while (!this.isEmpty()) {
      console.log(this.outer())
    }
  }
}

const newQueue = new Queue()

newQueue.entry(1)
newQueue.entry(2)
newQueue.entry(3)
console.log('-----Queue-----')
newQueue.display()
console.log('---------------')
