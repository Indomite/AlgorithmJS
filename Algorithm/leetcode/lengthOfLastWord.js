//最后一个单词的长度
/* 
    整体思路：
    首先对原来的字符串进行trim除空的处理
    然后用split将字符串分割开来
    获取最后一个数组的长度
*/
var lengthOfLastWord = function(s) {
    let str = s.trim().split(' ')
    let res = str[str.length-1]
    return res.length
};
console.log(lengthOfLastWord("a "));