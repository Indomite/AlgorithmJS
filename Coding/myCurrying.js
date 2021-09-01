function add(a){
  return function(b){
      return a+b
  }
}

console.log(add(1)(2));

function myCurrying(fn, ...args) {
  return fn.length > args.length ? (...args2) => myCurrying(fn, ...args, ...args2) : fn(...args)
}

function fn(a, b, c, d) {
  console.log(a + b + c + d)
}

fn = myCurrying(fn)
fn(1)(2)(3, 4) // 10
