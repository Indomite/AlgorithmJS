//二维数组寻找值
/* 
    整体思路：
    解法其实就是用的暴力解，二次循环将每个元素都拿出来对比
    整体效率不够
    [注意题给条件，每行每列都是递增的]
    这时候可以先获取一个值，然后根据获取的值
    判断周边的值，确定下一个比较的值的位置
*/

/* var findNumberIn2DArray = function(matrix, target) {
    for(let i=0;i < matrix.length;i++){
        for(let j=0;j < matrix[i].length;j++){
            if(matrix[i][j] === target){
                return true
            }
        }
    }
    return false
}; */

// 利用坐标轴的方式进行改进
var findNumberIn2DArray = function(matrix, target) {
    if(!matrix.length) return false;
    let x = matrix.length - 1, y = 0;
    while(x >= 0 && y < matrix[0].length){
        if(matrix[x][y] === target){
            return true;
        }else if(matrix[x][y] > target){
            x--;
        }else{
            y++;
        }
    }
    return false;
};

console.log(findNumberIn2DArray([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
],20));