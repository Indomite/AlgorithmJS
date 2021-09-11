function myInstanceof (left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype;
  console.log(prototype);
  while(true) {
    if(!proto) return false;
    if(proto === prototype) return true;
      proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof(1, Number));
