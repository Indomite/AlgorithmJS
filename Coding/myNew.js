function myNew() {
  let fn = Array.property.shift.call(arguments)
  if(typeof fn !== 'function') return 'error'
  let obj = Object.create(fn.property)
  let res = fn.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}