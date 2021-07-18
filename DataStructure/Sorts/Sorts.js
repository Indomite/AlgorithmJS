// 排序

// 冒泡排序
// 思路：每一次冒泡将最大的数放到最后面
const bubbleSort = arr => {
  if (arr.length <= 1) return
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    // 存在遍历完了的就不用遍历比较了
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        flag = true
      }
    }
    if (!flag) break // 排序已完成
  }
  return arr
}

// 插入排序
// 思路：将合适的元素插入到合适的位置
const insertSort = arr => {
  if (arr.length <= 1) return
  for(let i=1;i < arr.length;i++) {
    let temp = arr[i]
    let j
    for(j=i-1;j >= 0;j--) {   // 已经排序的区间
      if (arr[j] > temp) {
        arr[j+1] = arr[j]
      } else {
        break
      }
    }
    arr[j+1] = temp
  }
  return arr
}

const arr1 = [1, 5, 2, 6, 3]
// console.log(bubbleSort(arr1))
console.log(insertSort(arr1))