//加一
/* 
    整体思路：
    依次从最后一个字符串开始加一
    判断每一位是否在加一的情况下是否需要进位
    当到最后一位还是需要进位的情况下，此时在前面加1
*/
var plusOne = function(digits) {
    // 判断是否进位
    let go = false
    digits[digits.length - 1]++
    for(let i=digits.length-1;i >= 0;i--){
        if(go) digits[i]++
        go = digits[i] > 9 ? true : false
        digits[i] %= 10
    }
    if(go) digits.unshift(1)
    return digits
};

console.log(plusOne(digits = [9]));