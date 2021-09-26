let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,7,7]

/* function arrayFilterSame(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--
      }
    }
  }
  return arr;
} */

function arrayFilterSame(arr) {
  return res = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

/* function arrayFilterSame(arr) {
  return Array.from(new Set(arr))
  // return [...new Set(arr)]
} */

/* function arrayFilterSame(arr) {
  let res = []
  for(let key of arr) {
    if(res.indexOf(key) === -1) {
      res.push(key)
    }
  }
  return res
} */

console.log(arrayFilterSame(arr));