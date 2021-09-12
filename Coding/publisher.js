class Publisher {
  constructor() {
    // 观察者
    this.list = []
  }
  // 添加观察者
  addListener(listener) {
    this.list.push(listener)
  }
  // 移除观察者
  removeListener(listener) {
    this.list.forEach((item, index) => {
      if (listener === item) {
        this.list.splice(index, 1)
      }
    })
  }
  // 触发所有观察者的技能
  notify(obj) {
    this.list.forEach((item) => {
      item.process(obj)
    })
  }
}

class Subscriber {
  process(obj) {
    console.log(obj.name)
  }
}