//删除有序数组中重复的元素
/* 
    解题思路：
    1.循环判断前后两个数字是否相等，相等就分割
    2.采用双指针的方式，快指针判断前后两个数是否相等
      不相等的时候更新慢指针的值
*/

/* var removeDuplicates = function(nums) {
    let i = 0
    while(i < nums.length){
        if(nums[i] == nums[i+1]){
            nums.splice(i+1,1)
            i--
        }
        i++
    }
    return nums
}; */

var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};
console.log(removeDuplicates([-1,0,0,0,0,3,3]));