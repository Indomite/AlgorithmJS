Array.prototype.myFilter = function(fn, thisTo) {
  let res = [];
  let key = 0;
  for(let i = 0; i < this.length; i++) {
    console.log('fn', fn.call(thisTo, this[i], i, this));
    if(fn.call(thisTo, this[i], i, this)) {
      res[key] = this[i];
      key++;
    }
  }
  return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = arr.myFilter(function (val, index, array) {
	return val % 2 == 0;
})
console.log(res)