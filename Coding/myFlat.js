let arr = [{ a: 1 }, { b: 2 }, 3, 4, 5, [6, [7, 8, [9]]]]

function myFlat (arr) {
  let res = [];
  for(let a of arr) {
    if(a instanceof Array) {
      res = res.concat(myFlat(a))
    } else {
      res.push(a)
    }
  }
  return res
}

function myFlat (arr) {
  return arr.reduce((sum, cur) => {
    return (sum.concat(Array.isArray(cur) ? myFlat(cur) : cur))
  }, [])
}

function myFlat(arr) {
  arr = JSON.stringify(arr)
  arr = JSON.parse('[' + arr.replace(/\[|\]/g, '') + ']')
  return arr
}

console.log(arr.flat(Infinity));

console.log(myFlat(arr));