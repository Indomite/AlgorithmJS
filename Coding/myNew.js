function myNew() {
  let fn = Array.property.shift.call(arguments)
  if(typeof fn !== 'function') return 'error'
  let obj = Object.create(fn.property)
  let res = fn.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}

function myNew(con,...args){
  let obj={};
  // __proto__ 属性是非标准属性，Object/Reflect.setPrototypeOf()
  // new 应该用 Object.create实现，同样 Object.create 可以通过 new 实现
  obj.__proto__ =con.prototype;
  //绑定this并执行构造函数
  let result=con.apply(obj,args);
  return result instanceof Object? result:obj
}