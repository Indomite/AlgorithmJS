//最大子序列和
/* 
    整体思路：
    循环遍历，将数组中间的和相加到一起
    动态规划，其实两种方式的思路还是相似的
*/

var maxSubArray = function(nums) {
    let res = nums[0]
    let sum = 0
    for(let i=0;i < nums.length;i++){
        if(sum > 0){
            sum = sum + nums[i]
        }else{
            sum = nums[i]
        }
        res = Math.max(res,sum)
    }
    return res
};

var maxSubArray = function(nums) {
    let dp = []
    dp[0] = nums[0]
    let res = nums[0]
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
        if(res < dp[i]){
            res = dp[i]
        }
    }
    return res
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));