// 防抖：某个时间期限内，事件处理函数只执行一次
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  }
}

// 节流：在函数执行一次之后，该函数在指定的时间期限内不再工作
function throttle(fn, delay) {
  let valid = true
  return function(){
    if(!valid) return false;
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  }
}
