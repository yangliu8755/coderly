// 解决单例模式 通用性的问题

// 1 立即执行函数的 作用是 利用闭包保存变量
// 2 使用map的作用是 map 的键可以为对象 方便存储
// 3 下面的 代码 实现了 单例模式的通用性
let sinlleFn = (()=>{
  let map = new Map();
  return function(Fn,...args){
    if(! map.get(Fn)){
        map.set(Fn,new Fn(...args)); 
    }
     return map.get(Fn);
  }
})()


function Student(name, age){
    this.name = name;
    this.age = age ;
}

function Woker(name,age,hobit){
    this.name = name;
    this.age = age;
    this.hobit = hobit;
}

// 一个 构造函数 只能创建 一个所对应的实例对象重复 创造 返回第一个 实现了 单例模式
let stu = sinlleFn(Student,'ly',18);
let stu2 = sinlleFn(Student,'zy',20);
console.log(stu2);
console.log(stu === stu2);

let worker = sinlleFn(Woker,'ly','18','basketball');
let worker2 = sinlleFn(Woker,'zy','20','yu');
console.log(worker2);
console.log(worker === worker2);

