// 用对象实现的 职责链模式 较简单
// 职责链模式的意义 每个 函数分工实现的功能分工明确。
let obj = {
     a(){
      console.log('a');
      return this;
     },
     b(){
      console.log('b');
      return this;
     },
     c(){
      console.log('c');
     }
}
obj.a().b().c()