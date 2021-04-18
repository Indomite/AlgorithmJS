//旋转数组最小数字
/* 
    解体思路：
    重点在于旋转数组（把数组的最开始几个元素放到数组后面）
    暴力解，直接取最小的
*/

/* var minArray = function(numbers) {
    let res = numbers[0]
    for(let i=0;i < numbers.length;i++){
        if(numbers[i]<res){
            return numbers[i]
        }
    }
    return res
}; */

/* 
    二分查找
*/
/* var minArray = function(numbers) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (numbers[pivot] < numbers[high]) {
            high = pivot;
        } else if (numbers[pivot] > numbers[high]) {
            low = pivot + 1;
        } else {
            high -= 1;
        }
    }
    return numbers[low];
}; */

var minArray = function(numbers) {
    for (let i = 0; i < numbers.length-1; i++) {
        if (numbers[i] > numbers[i + 1]) return numbers[i + 1]
    }
    return numbers[0]
};
console.log(minArray([1,2,3,3]));