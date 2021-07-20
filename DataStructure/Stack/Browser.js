const Stack = require('./Stack')

// 用Stack模拟浏览器记录的实现

class Broswer {
  constructor() {
    this.backStack = new Stack.createStack()
    this.frontStack = new Stack.createStack()
  }

  // 正常访问网站
  normalVisit (url) {
    this.backStack.push(url)
    this.frontStack.clear()
    this.displayAllStack()
  }

  // 回退操作
  back() {
    const url = this.backStack.pop()
    if(url !== -1) {
      this.frontStack.push(url)
      this.displayAllStack()
    } else {
      console.log('没有后退页');
    }
  }

  // 前进操作
  front() {
    const url = this.frontStack.pop()
    if(url !== -1) {
      this.backStack.push(url)
      this.displayAllStack()
    } else {
      console.log('没有前进页');
    }
  }

  // 展示当前栈中的所有页面
  displayAllStack() {
    console.log('后退栈');
    this.backStack.display()
    console.log('————————');
    console.log('前进栈');
    this.frontStack.display()
    console.log('\n');
  }
}

const broswer = new Broswer()
broswer.normalVisit('www.baidu.com')
broswer.normalVisit('www.google.com')
broswer.normalVisit('www.fackbook.com')
broswer.back()
broswer.back()
broswer.normalVisit('www.yaho.com')
broswer.normalVisit('www.linkedin.com')
broswer.front()
