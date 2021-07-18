//买卖股票的最佳时机
/* 
    整体思路：
    不断获取最小的价格然后用当前的价格相减最后比较
*/
var maxProfit = function(prices) {
    let max = 0
    let minPrice = prices[0]
    for(let i=1;i<prices.length;i++){
        minPrice = Math.min(prices[i],minPrice)
        max = Math.max(max,prices[i]-minPrice)
    }
    return max
};
console.log(maxProfit([7,1,5,3,6,4]));