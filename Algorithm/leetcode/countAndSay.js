//外观数列

var countAndSay = function(n) {
    if(n==1){
        return n.toString()
    }
    var tempArr = countAndSay(n-1).match(/(\d)\1*/g)
    var result = ""
    tempArr.forEach((item)=>{
        var lth = item.length.toString()
        var num = item.substring(0,1)
        result = result+lth+num
    })
    return result
};
console.log(countAndSay(7));