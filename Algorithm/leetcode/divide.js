// 两数相除

var divide = function (dividend, divisor) {
  if (!divisor) return;
  if (divisor === 1) return dividend;
  if (divisor === -1 && dividend === (-2) ** 31) return 2 ** 31 - 1; // 处理特殊值

  let res = 0;
  let flag = '';
  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
    flag = '-'; // 符号
  }
  dividend = Math.abs(dividend); // 取绝对值
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    dividend -= divisor; // 累减，计数器不断更新
    res++;
  }

  return parseInt(flag + res); // 转化成结果
};

console.log(divide(10, 3));
