/* 
  原型链继承
  父类方法子类可以使用，到那时所有的方法都会被子类所共享，更改一个子类，其他的也会受到影响
*/

function Parent() {
  this.info = {
    name: 'indomite',
    age: 22
  }
  this.isOK = true
}

Parent.prototype.getInfo = function() {
  console.log(this.info);
}

function Child() {}

Child.prototype = new Parent();

/* let child1 = new Child();
child1.info.gender = "男";
child1.getInfo(); */

/* 
  构造函数继承
  相比于原型链继承，构造函数继承可以传递参数，父类的引用属性不会被共享
  子类不能访问父类的原型上定义的方法，每次创建实例都会初始化方法属性
*/

function Parent() {
  this.info = {
    name: 'indomite',
    age: 22
  }
}

function Child() {
  Parent.call(this)
}

/* let child1 = new Child();
child1.info.gender = "男";
console.log(child1.info);

let child2 = new Child();
console.log(child2.info); */

/* 
  组合继承
  父类的方法可以复用
  可以在Child构造函数中向Parent构造函数中传参
  父类构造函数中的引用属性不会被共享
*/

function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "yellow"]
}

Parent.prototype.sayName = function () {
  console.log(this.name);
}

function Child(name, age) {
  // 继承父类属性
  Parent.call(this, name)
  this.age = age;
}

// 继承父类方法
Child.prototype = new Parent();

Child.prototype.sayAge = function () {
  console.log(this.age);
}

/* let child3 = new Child("indomite", 22);
child3.colors.push("pink");
console.log(child3.colors);
child3.sayAge();
child3.sayName();

let child4 = new Child("luoming", 30);
console.log(child4.colors);
child4.sayAge();
child4.sayName(); */

/* 
  寄生组合继承
*/

function objectCopy(obj) {
  function Fun() {};
  Fun.prototype = obj;
  return new Fun();
}

function inheritPrototype(child, parent) {
  let prototype = objectCopy(parent.prototype); // 创建对象
  prototype.constructor = child; // 增强对象
  Child.prototype = prototype;  // 赋值对象
}

function Parent(name) {
  this.name = name;
  this.friends = ["rose", "lily", "tom"]
}

Parent.prototype.sayName = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inheritPrototype(Child, Parent);
Child.prototype.sayAge = function () {
  console.log(this.age);
}

let child1 = new Child("indomite", 22);
child1.sayAge();
child1.sayName();
child1.friends.push("jack");
console.log(child1.friends); // ["rose", "lily", "tom", "jack"]

let child2 = new Child("luoming", 30)
child2.sayAge();
child2.sayName();
console.log(child2.friends); // ["rose", "lily", "tom"]
