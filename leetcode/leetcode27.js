//移除元素
/* 
    整体思路：
    将数组中的元素过滤，也就是判断元素是否相等，相等删除，或者采用快慢指针的方式
    或者直接采用js的filter过滤器过滤
*/

/* var removeElement = function(nums, val) {
    let res = 0
    for(let i=0;i < nums.length;i++){
        if(nums[i] !== val){
            nums[res] = nums[i];
            res++;
        }
    }
    return res
}; */

var removeElement = function(nums, val) {
    return (nums.filter((item) => item !== val)).length
};

console.log(removeElement([3,2,2,3],3));