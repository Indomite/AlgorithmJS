// 打印从1到最大的n位数

var printNumbers = function(n) {
  let max = 1;
  while(n !== 0){
      max = max * 10;
      n--;
  }
  let res = []
  for(let i=1; i < max; i++){
    res.push(i)
  }
  return res
};
console.log(printNumbers(1));
