// 单例模式 确保 每个对象 只被创建一次

// 以下单例模式只能确保 一个 构造器所创建对象,其他构造器则不行，不具有通用性
function A(name){
   this.name = name;
}

function  Person(name){
  this.name = name;
   
}
// 这里利用对象属性不能重复 写在函数对象上只是为了  更方便 
A.getInstance = function(fn){
    if(! this.instance){
       this.instance = new fn('ly');
    }
    return this.instance;
}
let a = A.getInstance(A);
let b = A.getInstance(Person);
console.log(a === b)

let obj = {};
obj.getInstance = function(fn){
  if(! this.instance){
     this.instance = new fn('ly');
  }
  return this.instance;
}
