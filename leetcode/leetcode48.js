// 旋转图像

/* 
  观察发现，将列转换成行可完成变换
*/

var rotate = function (matrix) {
  let martrixLength = matrix.length
  for (let i = 0; i < martrixLength; i++) {
    for (let j = i; j < martrixLength; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  return matrix.map(item => item.reverse())
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
