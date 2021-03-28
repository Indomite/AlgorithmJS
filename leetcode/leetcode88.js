// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a, b) => a - b);
//     return nums1
// };

// 双指针
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i != m + n; ++i) {
        nums1[i] = sorted[i];
    }
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));