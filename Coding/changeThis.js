function test(a, b) {
  console.log(this, a + b)
}

Function.prototype.myCall = function(thisArg) {
  if (typeof this !== 'function') {
    throw "error"
  }
  if(!(thisArg instanceof Object)) {
    thisArg = new Object(thisArg)
  }
  thisArg = thisArg || window
  thisArg.fn = this
  let args = [...arguments].slice(1)
  let res = thisArg.fn(...args)
  delete thisArg.fn
  return res
}

Function.prototype.myApply = function (thisArg) {
  thisArg = thisArg || window
  if (!(thisArg instanceof Object)) {
      thisArg = new Object(thisArg)
  }
  thisArg.fn = this
  let res = null
  if (arguments[1]) {
      res = thisArg.fn(...arguments[1])
  } else {
      res = thisArg.fn()
  }
  delete thisArg.fn
  return res
}

Function.prototype.myBind = function (thisArg) {
  const that = this
  const args = [...arguments].slice(1)
  return function F() {
      const bindArgs = args.concat(...arguments)
      if (this instanceof F) {
          return new that(...bindArgs)
      }
      return that.apply(thisArg,bindArgs)
  }
}

test.myApply({ a: 2, b: 4 }, [4, 4])