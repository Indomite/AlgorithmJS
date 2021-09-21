/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.item = [];
  this.min = Infinity;
  return this;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.item.push(val);
  this.min = Math.min(this.min, val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if(!this.item.length) return 0;
  let s = this.item.pop();
  if(this.min === s){
    this.min = Math.min(...this.item)
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let len = this.item.length
  if(!len) return 0;
  return this.item[len-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

