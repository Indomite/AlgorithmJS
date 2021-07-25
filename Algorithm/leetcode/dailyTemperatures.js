// 每日温度

// 暴力解法，直接两遍遍历找出来
/* var dailyTemperatures = function(temperatures) {
  let len = temperatures.length
  for (let i = 0; i < len; i++) {
    let index = i+1
    while(index < len && temperatures[index] <= temperatures[i]) {
      index++
    }
    temperatures[i] = index >= len ? 0 : index-i
  }
  return temperatures
}; */


// 单调栈
var dailyTemperatures = function(temperatures) {
  const res = new Array(temperatures.length).fill(0)
  const stack = [];
  for(let i=temperatures.length-1; i >= 0;i--) {
    while(stack.length && temperatures[i] >= temperatures[stack[stack.length-1]]){
      stack.pop()
    }
    if(stack.length) {
      res[i] = stack[stack.length - 1] - i
    }
    stack.push(i)
  }
  return res
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));