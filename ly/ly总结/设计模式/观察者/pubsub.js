// 定义一个数组实现的 发布订阅模式 太单一 所以使用对象中定义数组的实现订阅模式
let pubSub = {};
function pub(key,fn){
    if(! pubSub[key]){
       pubSub[key] = [];
    }
    pubSub[key].push(fn);
    // 利用改模式方便在在函数内部找到 函数的 引用值 
    return function(){
         pubSub[key] = pubSub[key].filter(item=> item != fn)
    }
}

function sub(key,args){
   if( ! pubSub[key]){
       throw new Error('不存在');
       return ;
   }
   pubSub[key].forEach((item,index)=>{
       item(...args[index]);
      
   })
}

// 原生js 使用的 发布订阅模式需要 同一函数引用值 
// function onClick(){
//    console.log(this);
// }
// document.addEventListener('click',onClick);
// document.removeEventListener('click',onClick);



// 以下函数实现的 是 同一引用值发布订阅模式的 取消
function remove(key,fn){
  let arr = pubSub[key];
  let length = arr.length;
  for(let i = 0;i < length; i++){
     if(arr[i] === fn){
        arr.splice(i,1)
        return true;
        
     }
     
  }
  return false; 
}
function shop(name,price){
   console.log(name,price);
   console.log('shop');
   
}
function shop2(name,price){
  console.log(name,price);
   console.log('shop2');
  
}
// pub('shop',shop)
// pub('shop',shop2)
// sub('shop',[['娃娃a',18],['娃娃b',20]]);
// remove('shop',shop)
// sub('shop',[['娃娃a',18],['娃娃b',20]]);

// 以下函数方便 发布订阅模式的取消


let unPub = pub('sell',function(name){
    console.log(name)

})
let unPub2 = pub('sell',function(name){
    console.log(name)

})
sub('sell',[['衬衫'],['裤子']]);
unPub();
sub('sell',[['衬衫'],['裤子']]);




