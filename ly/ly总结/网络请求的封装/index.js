const methods = ['get', 'post', 'put', 'patch', 'delete']
const $http = {}
// 模拟实现 axios  axios.get axios,post 执行函数后 都返回 一个 promise 对象
methods.forEach((item)=>{
    $http[item] = function(){
        let args = [].slice.call(arguments,0); // 
        return new Promise((resolve,reject)=>{
             axios[item].apply(axios,args).then((data)=>{
                   resolve(data)

             },(err)=>{
                  reject(err);

             })
             

        })
    }

})
Vue.prototype.$http = $http;
Array.prototype.myForEach = function(func,_this){
     _this = _this ? _this : '';
     for(let i=0;i<this.length;i++){
          func.call(_this,this[i],i,this)
          
     }

}
let arr = [1,2,4];
let obj = {a:1}
arr.myForEach((item,i)=>{
    console.log(item)
    console.log(this);

},obj)
    
