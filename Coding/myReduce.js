Array.prototype.myReduce = function(fn, thisTo) {
  let total = this[0];
  for(let i = 1;i < this.length;i++) {
    total = fn.call(this[i], total, this[i], i, this)
  }
  return total
}

let arr = [1, 2, 3, 4, 5];
let res = arr.myReduce((total, cur, index, arr) => {
  console.log(total, cur, index, arr); //每一次的tatal就是上一次的循环执行的返回结果
  return total + cur;
});
console.log(res)
