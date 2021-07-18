// 寻找重复数字
/* 
    整体思路：
    通过两层循环，中间变量将第一轮循环的值保存
    第二轮循环再将之后的值和第一个值进行比较
    相同的情况即可输出
    [本题相对来说条件不是很苛刻（只需要找出一个就好），优化的空间很大]
*/

/* var findRepeatNumber = function(nums) {
    for(let i=0;i < nums.length;i++){
        let ans = nums[i]
        for(let j=i+1;j < nums.length;j++){
            if(ans === nums[j]){
                return ans
            }
        }
    }
}; */

var findRepeatNumber = function(nums) {
    let map = new Map();
    for(let i of nums){
        if(map.has(i)) return i;
        map.set(i, 0);
    }
    return null;
};
console.log(findRepeatNumber([0, 1, 1, 2, 3, 3]));