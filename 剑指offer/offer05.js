var replaceSpace = function(s) {
    let str = ''
    for(let item of s){
        str += item.replace(' ','%20')
    }
    return str
};
console.log(replaceSpace("We are happy."));