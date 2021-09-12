function mySet() {
  let res = {};
  this.size = 0;
  // has方法
  this.has = function (val) {
    return res.hasOwnProperty(val)
  }

  // add方法
  this.add = function (val) {
    if (!this.has(val)) {
      res[val] = val;
      this.size++;
      return true
    }
    return false
  }

  // delete方法
  this.delete = function (val) {
    if (this.has(val)) {
      delete res[val];  // 将items对象上的属性删掉
      this.size--;
      return true;
    }
    return false;
  };

  // clear方法
  this.clear = function () {
    res = {};     // 直接将集合赋一个空对象即可
    this.size = 0;
  };

  // keys()方法
  this.keys = function () {
    return Object.keys(res);  // 返回遍历集合的所有键名的数组
  };

  // values()方法
  this.values = function () {
    return Object.values(res);  // 返回遍历集合的所有键值的数组
  };
}

let set = new mySet();
set.add(1);
set.add(3);
set.add(2);
console.log(set.keys());
console.log(set.values()); 
