class EventBus {
  constructor() {
    this.events = this.events || {}
  }

  // 注册事件
  $on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }

  // 触发事件
  $emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => {
        callback && callback(...args)
      })
    }
  }

  // 事件响应一次
  $once(eventName, callback) {
    let _this = this
    function handler(args) {
      callback.apply(_this, [args])
      _this.$off(eventName)
    }
    this.$on(eventName, handler)
  }

  // 注销事件
  $off(eventName) {
    if (eventName) {
      this.events[eventName] && (delete this.events[eventName]);
    } else {
      this.events = [];
    }
  }
}

const bus = new EventBus()
bus.$on('add', function(a,b){
  console.log(a+b)
})
bus.$emit('add', 10, 20)