var findMedianSortedArrays = function(nums1, nums2) {
    let res = []
    res = nums1.concat(nums2)
    res.sort(function(a, b){return a - b})
    if(res.length%2 == 0){
        return (res[res.length/2-1]+res[res.length/2])/2
    }else{
        return res[(res.length-1)/2]
    }
};

console.log(findMedianSortedArrays([3],[-2,-1]));