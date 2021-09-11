let arr = [1,2,[3,4,[5,6]]];

/* function arrayFlat(arr) {
  return arr.flat(Infinity)
} */

function arrayFlat(arr) {
  return arr.reduce(function (prev, cur) {
    return prev.concat(Array.isArray(cur) ? arrayFlat(cur) : cur);
  }, [])
}

console.log(arrayFlat(arr));