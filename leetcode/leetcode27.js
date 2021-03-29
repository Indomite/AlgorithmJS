//双指针
var removeElement = function(nums, val) {
    let res = 0
    for(let i=0;i < nums.length;i++){
        if(nums[i] !== val){
            nums[res] = nums[i];
            res++;
        }
    }
    return res
};

var removeElement = function(nums, val) {
    return (nums.filter((item) => item !== val)).length
};

console.log(removeElement([3,2,2,3],3));