const SERVE = '/server'
// 原生实现
let xhr = new XMLHttpRequest()
// 创建http请求
xhr.open('GET', url, true)
// 设置状态监听函数
xhr.onreadystatechange = function () {
  // 请求成功
  if (this.readyState !== 4) return
  if (this.status === 200) {
    handler(this.response)
  } else {
    console.log(this.statusText);
  }
}

// 请求失败的监听函数
xhr.onerror = function () {
  console.error(this.statusText);
}

// 请求类型和请求头
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');

// 发送 Http 请求
xhr.send(null)

// promise封装实现
function getJSON(url) {
  // 创建promise
  let promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      // 当请求成功或失败时，改变 promise 的状态
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
    // 设置错误监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };
    // 设置响应的数据类型
    xhr.responseType = "json";
    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");
    // 发送 http 请求
    xhr.send(null);
  })
  return promise
}
