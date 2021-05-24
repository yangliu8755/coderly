
// 数组中含有 多个 异步函数 当异步函数得到响应时,才能够执行下一个 数组中的 异步函数 逐一执行完毕后 可以 执行数组执行完毕后的回调函数
// two.js 中是对index.js 的优化
class Iter{
   constructor(iterArr){
      this.IterArr = iterArr || []
   }
   addPush(fn){
       fn && this.IterArr.push(fn);
   }
   runHook(callBack){
      let iterrator = (fn,next) => {
          fn(()=>{
             next();
          })   
      }
      this.runQueue(this.IterArr,iterrator,callBack);
   }
   runQueue(iterArr,iterFn,callBack){
     let step =(index) =>{
         if(index >= iterArr.length){
           callBack();
            
         }else{
            if(iterArr[index]){
                iterFn(iterArr[index],()=>{
                     step(index+1);
                })
            }else{
               step(index+1);
            }
         }
     }
     step(0);  
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
iterObj.runHook(()=>{
   console.log('数组内的函数已经全部被执行')
})