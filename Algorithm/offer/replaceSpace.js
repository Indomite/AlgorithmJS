//替换空格
/* 
    整体思路：
    直接用正则将字符串中的空格替换
*/
var replaceSpace = function(s) {
    let str = ''
    for(let item of s){
        str += item.replace(' ','%20')
    }
    return str
};
console.log(replaceSpace("We are happy."));