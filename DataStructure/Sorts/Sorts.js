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

// 选择排序
// 思路：从头到尾扫描序列，找到最小的元素，和第一个元素交换，接着剩下的元素继续这么交换，最终得到有序的序列
const selectSort = arr => {
  if (arr.length <= 1) return
  for(let i=0;i < arr.length-1;i++) {   // 未排序区间
    let minIndex = i
    for(let j=i+1; j < arr.length; j++) {   // 将未排序区间中的最小值放到区间的末尾
      if(arr[j] < arr[minIndex])
        minIndex = j
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 快速排序
// 思路：寻找一个临界点，根据临界点，左右二分排序
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const partition = (arr, pivot, left, right) => {
  const pivotal = arr[pivot]
  let startIndex = left
  for(let i=left; i < right; i++) {
    if (arr[i] < pivotal) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

const quickSort = (arr, left, right) => {
  if (left > right) return

  let pivot = right
  let partitionIndex = partition(arr, pivot, left, right)
  quickSort(arr, partitionIndex + 1, right)
  quickSort(arr, left, partitionIndex - 1)
}

// 归并排序
// 思路：

const mergeArr = (leftArr, rightArr) => {
  const temp = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftArr.length > leftIndex && rightArr.length > rightIndex) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      temp.push(leftArr[leftIndex])
      leftIndex++
    } else {
      temp.push(rightArr[rightIndex])
      rightIndex++
    }
  }
  return temp.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  return mergeArr(mergeSort(leftArr), mergeSort(rightArr))
}


const arr1 = [1, 5, 2, 6, 3]
// console.log(bubbleSort(arr1))
// console.log(insertSort(arr1))
// console.log(selectSort(arr1))
// quickSort(arr1, 0, 4)
// console.log(arr1)
console.log(mergeSort(arr1))