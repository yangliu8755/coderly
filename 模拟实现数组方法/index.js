(()=>{
    var  arr=[
        {name:'liuyang',age:18,hobbit:'lanqiu',sex:'m'},
        {name:'liuyue',age:10,hobbit:'zuqiu',sex:'w'},
        {name:'liuhuili',age:20,hobbit:'pingpang',sex:'m'}
    ];
 
   Array.prototype.myForEach=function(func){
             //  this 指的是  调用 myForEach 的 数组 
          var len=this.length; parse=arguments[1] || window;
          for(var i=0;i<len;i++){
              //  调用 时  将  每一位 对应的 对象  和 索引 传入
              //  巧妙 之处 在于  调用 函数 时 预编译  时 将 func：function (){} 挂载 在 自己 身上  处理 函数  在 实参 的 函数 中 处理 透明 代码  第二个 参数 通过.apply 的 方法 
              //  改变  func 中的 this  处理 传入 的 第二个 参数 
                  func.apply(parse,[this[i],i,this]);
              
          }
   }

   //  filter  的 自己 模拟   将 符合 条件的 信息 所对应的  对象 返回到  新数组 中 
   Array.prototype.myFilter=function(func){

            var len=this.length,newArr=[],parse=arguments[1] || window;
            for(var i=0;i<len;i++){

                //  通过 func  的 处理  得出 return 的 值  然后将  满足 条件的 加入 新的 数组中
                func.apply(parse,[this[i],i,this])?newArr.push(this[i]):' ';

            }
            return newArr;
   }


 
  Array.prototype.myMap=function(func){
      var  len=this.length,newArr=[],parse=arguments[1] || window;
        for(var i=0;i<len;i++){
              newArr.push(func.apply(parse,[this[i],i,this]));

        }
        return newArr; //  func 函数体 中对 数组 中的 对象 操作后  返回  ele  则 为俩个 数组 
         //  但是 俩个 数组的 每一位 所 存储的 为 同一个 地址 （同一个 对象） 后期 操作 返回 后的 数组 中 对象 的 值 的 时候  

  }
     // var arr2=arr.myMap(function(ele,index,self){
     //          return ele.name;
     // })
     // console.log(arr2);


     //  模拟 every 


     Array.prototype.myEvery=function(func){
            var len=this.length,parse=arguments[1]||window;
            var clock=true;
            for(var i=0;i<len;i++){
                   var ss=func.apply(parse,[this[i],i,this]);
                   if(!ss){
                          clock=false;
                          break;

                   }

            }
            return clock;

     }

      Array.prototype.mySome=function(func){
            var len=this.length,parse=arguments[1]||window;
            var clock=false;
            for(var i=0;i<len;i++){
                   var ss=func.apply(parse,[this[i],i,this]);
                   if(ss){
                          clock=true;           
                          break;

                   }

            }
            return clock;

     }


     // var ss=arr.myEvery(function(ele,index,self){
     // 	  return ele.age>6;
     // })



     var  str="BAIDUID=95A39CE5419B46D74B88B52EA3391D72:FG=1; FEED_SIDS=733231_0116_16; H_WISE_SIDS=124612_125820_128356_127844_127240_109775_114745_127492_128894_120217_128621_118897_118876_118849_118833_118796_126166_128037_128457_107319_126996_127771_127404_127768_117330_128449_128451_128820_128402_127836_128589_124627_128791_128246_128005_127797_114820_126720_127872_128240_124030_128341_110085_128665_123290_127700_127124_128763_127315_127226_127380_128601_128201_128960; BDSVRTM=43; plus_lsv=b1cc852a09378042; BDORZ=AE84CDB3A529C0F8A2B9DCDD1D18B695; plus_cv=1::m:d03af37f; Hm_lvt_12423ecbc0e2ca965d84259063d35238=1547628562; Hm_lpvt_12423ecbc0e2ca965d84259063d35238=1547628562; SE_LAUNCH=5%3A25793805_0%3A25793805";
     var arr=str.split('; ');
     var arrObj={}



  // reduce 的 自己实现   prevvalue 为 引用 值  所以 始终 都可以 通过 arrObj找到 该 对象的地址  实际 的操作 为 向 该 对象 添加 属性 与 前面 不同的 是 第二个 参数 不作为改变 this的  对象 而是 作为 最终 传入的 对象
     Array.prototype.myReduce=function(func,prevvalue){
           var len=this.length,parse=arguments[2] || window;
              for(var i=0;i<len;i++){
                     pevevalue=func.apply(parse,[prevvalue,this[i],i,this]);
              }

     }


    //  将 cookie 字符串 转化 为 对象的 封装 

       function parseCookieStr(str){
             var arr=str.split('; ');
           var arrObj={};
           arr.reduce(function(prevvalue,curlvalue,index,self){
                 var arr=curlvalue.split('=');
                 prevvalue[arr[0]]=arr[1];
                 return prevvalue;
           },arrObj);
           return arrObj;

       }



     // arr.myReduce(function(prevvalue,curlvalue,index,self){
     // 	    var arr=curlvalue.split('=');
     // 	    prevvalue[arr[0]]=arr[1];
     // 	    return prevvalue;

     // },arrObj);
     // console.log(arrObj);


})()