var findRepeatNumber = function(nums) {
    for(let i=0;i < nums.length;i++){
        let ans = nums[i]
        for(let j=i+1;j < nums.length;j++){
            if(ans === nums[j]){
                return ans
            }
        }
    }
};
console.log(findRepeatNumber([0, 1, 2, 3, 3]));