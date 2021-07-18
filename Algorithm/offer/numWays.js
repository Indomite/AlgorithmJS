//斐波那契数列，青蛙跳台阶
/* 
    整体思路：
    一般有两种方式，递归或者动态规划
    采用动态规的话主要就是运用数组存取前一个数据
*/
var numWays = function(n) {
    let res = []
    res[0] = res[1] = 1
    res[2] = 2
    for(let i=3;i <= n;i++){
        res[i] = (res[i-1]+res[i-2])%1000000007
    }
    return res[n]
};