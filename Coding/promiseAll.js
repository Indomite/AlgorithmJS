function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let promiseCounter = 0,
      promiseNum = promises.length,
      resolvedValues = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      //let 本身就有块级作用域，此处无需使用闭包
      (function (i) {
        Promise.resolve(promises[i]).then((value) => {
          promiseCounter++;
          resolvedValues[i] == value;
          if (promiseCounter == promiseNum) {
            return resolve(resolvedValues);
          }
        }).catch(error => {
          reject(error)
        })
      })(i)
    }
  })
}