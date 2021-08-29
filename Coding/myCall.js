/* function person () {
  console.log(this.name)
}

const my = {
  name : 'indomite'
}

person.call(my)

// call改变了this的指向，同时我们再尝试一下另一种方式

const myEqual = {
  name : 'indomite',
  person: function () {
    console.log(this.name);
  }
} 

myEqual.person() */

function person () {
  console.log(this.name)
}

const my = {
  name : 'indomite'
}

Function.prototype.myCall = function (obj) {
  console.log(this);
  obj.p = this
  obj.p()
}

person.myCall(my)