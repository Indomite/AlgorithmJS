// 第一个参数是回调函数，第二个参数是this的指向
Array.prototype.myMap = function (fn, thisTo) {
  // 返回一个function
  let res = []
  for (let i = 0; i < this.length; i++) {
    res[i] = fn.call(thisTo, this[i])
    console.log('res', res[i]);
  }
  return res;
}

let arr = [
  { title: 'aaaaa', read: 100, hot: true },
  { title: 'bbbb', read: 100, hot: true },
  { title: 'cccc', read: 100, hot: true },
  { title: 'dddd', read: 100, hot: true }
];
let newArr = arr.myMap((item, index, arr) => {
  let json = {}
  json.t = `^_^${item.title}-----`;
  json.r = item.read + 200;
  json.hot = item.hot == true && '真棒!!!';
  return json;
});
console.log(newArr);
