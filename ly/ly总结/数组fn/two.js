class Iter{
  constructor(iterArr){
     this.iterArr = iterArr || []
  }
  addPush(fn){
      fn && this.IterArr.push(fn);
  }
  runQueue(callBack){
    // 模拟队列
     let _this = this;
     let next = function(){
         let fn = _this.iterArr.shift();
         if(fn){
            fn(()=>{
               next();
            })
         }else{
            callBack();
         }
     }
     next();
     
  }
}

let delay = delayTime => {
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve()
      },delayTime)
  })
}

let arrFn = [
 async (fn)=> {
    await delay(1000)
    console.log(1);
    fn();
},
async (fn)=> {
 await delay(2000)
 console.log(2);
 fn();
},
async (fn)=> {
 await delay(3000)
 console.log(3);
 fn();
},
]
let iterObj = new Iter(arrFn);
iterObj.runQueue(()=>{
   console.log('数组中的 异步函数已经执行完毕')
});