// 利用数组 reduce 和promise 缓解 服务器压力 

Array.prototype.myReduce = function(){
  let fun = arguments[0];
  let redu = arguments[1] && arguments[1] != '' ? arguments[1] : '' ;
  let obj = arguments[2] ? arguments[2] : null;
   for(let i =0;i<this.length;i++){
      redu = fun.apply(obj,[redu,i,this[i],this])
       
   }
   return redu
}

let arr = ['a','b','c','d'];
let str = arr.myReduce((redu,i,item,self)=>{
    return redu + item;

},'')
console.log(str);

// 根据reduce 这一特性实现 向浏览器逐一发送 ajax 请求
// 

function getList(len){
  let arr = new Array(len);
   for(let i = 1;i<=len;i++){
       arr.push(`www.baidu${i}abc.com`);
   }
   return arr;
}
async function  getMessage(method,url){
     return axios[method](url)
 
}
let arr = getList(10);


// 利用 reduce 第二个参数传入 一个  resolved 状态的 promise 返回的rs.then() 创建的 promise 和传入 
// 的rs 为 同一 promise 对象 这样 相当于实现了  promise的 链式调用 then 函数中返回的是一个 promsie 当该
// promise 为 resolved 状态时 才会 将 .then()执行后返回的 promise中的 函数 加入到 微任务队列中

// 这样相当于实现了非并发 请求 即 逐一请求。
arr.reduce((rs,url)=>{ 
   return rs.then((res)=>{
          return new Promise(async (resolve,reject)=>{
                        await getMessage('get',url)
                      resolve()
        
          })

   })

},Promise.resolve())