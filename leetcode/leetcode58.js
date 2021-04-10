var lengthOfLastWord = function(s) {
    let str = s.trim().split(' ')
    let res = str[str.length-1]
    return res.length
};
console.log(lengthOfLastWord("a "));