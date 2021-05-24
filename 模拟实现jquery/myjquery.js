(function(){
    function jQuery(selector){
        return  new jQuery.prototype.init(selector);
    }
    jQuery.prototype.init=function(selector){
          this.length=0;

       if(selector==null){
             //  selector 为 空时 直接 返回 this 空对象
              return this;
       }
       if(selector instanceof Element){
                this[0]=selector; //  selector 为 原生 dom  时 包装 为 jquery  对象 并返回 this 可以使用jquery的  方法 

                this.length++;
       }
       if(typeof selector == 'string' && selector.indexOf('.')!=-1){
               selector=selector.slice(1);
               var domArr=document.getElementsByClassName(selector);
       }else if(typeof selector == 'string' && selector.indexOf('#')!=-1){
             selector=selector.slice(1);
             var domArr=document.getElementById(selector);
       }


   if(domArr!=null){
       if(domArr.length == undefined){
                this[0]=domArr;
                this.length++;
       }else{
                for(var i=0; i<domArr.length;i++){
                         this[i]=domArr[i];
                         this.length++;
                }
       }   
   }
    
    }
    jQuery.prototype.get=function(num){

    //  获取  this  中 存储的 原生 dom 对象  么有 传参数 将 类数组 转换为 数组 返回 给 函数
     return num != null  ? (num>0? this[num]:this[num+this.length]):[].slice.call(this,0);

    }

jQuery.prototype.eq=function(num){

       //  获取  this  中 存储的 原生 dom 对象  么有 传入 参数 的 时候  为 null 
          var dom=num != null  ? (num>0? this[num]:this[num+this.length]):null;

         // 调用 $ 函数 将 原声 dom 包装为 jquery dom 可以 使用 jquery 的方法
         return this.pushStack(dom);
       



}

    jQuery.prototype.css=function(obj){
         for(var i=0;i<this.length;i++){
               for(var prop in obj){
                 this[i].style[prop]=obj[prop];
             }

         }
         return this;
    }
    jQuery.prototype.pushStack=function(dom){

        if(dom.constructor != jQuery){ //  因为 改变了 jQuery.prototype.init.prototype=jQuery.prototype
               dom=$(dom);	  
        }
        dom.prevObject=this; //  此处的 this 为 $('.demo')  不是 jquery 对象 new 一个jquery对象 然后返回

     return dom;
    }
    jQuery.prototype.add=function(selector){
             var dom=$(selector);
             var newDom=$();
             for(var i=0;i<dom.length;i++){
                   newDom[newDom.length++]=dom[i];
             }
             for(var i=0;i<this.length;i++){
                    newDom[newDom.length++]=this[i];
             }
//  $('.demo').add('.ss').css({width:'100px',height:'100px',background:'red'}).end().css({background:'blue'});
//  调用  该方法 相当于 新生 了 一个 jquery  对象  但 this  为  $('.demo') 因为  是它 调用的
//   调用 pushStack 为了  让 新产生 的  jquery 的 对象 prevObject=this

          return  this.pushStack(newDom); 

    }
    jQuery.prototype.end=function(){
            return this.prevObject;
    }

 jQuery.prototype.myOn=function(type,handel){
        for(var i=0;i<this.length;i++){
             if(!this[i].catchObj){
                   this[i].catchObj={};
             }
             if(!this[i].catchObj[type]){
                   this[i].catchObj[type]=[handel];
             }else{
                  this[i].catchObj[type].push(handel);
             }
        }
 }
 jQuery.prototype.myTrigger=function(type){
      var arr=arguments.length>1?[].slice.call(arguments,1):[];
      for(var i=0;i<this.length;i++){
           if(this[i].catchObj[type]){
                 var self=this[i];
                 this[i].catchObj[type].forEach(function(ele,index){
                       ele.apply(self,arr);
                 })
           }
      }
 }
 jQuery.prototype.myQueue=function(){
         var queueName=arguments[0] || 'fx';
         var func=arguments[1] || null; 
         var len=arguments.length;
         if(len==1){
             return  this[0][queueName];
         }
     this[0][queueName]==undefined ? this[0][queueName]=[func]:this[0][queueName].push(func);
    return this;
    
 }




jQuery.prototype.myDelay = function (duration) {
     var queueArr = this[0]['fx'];
     queueArr.push(function (next) {
         setTimeout(function () {
             next();
         }, duration);
     });
     return this;
}





jQuery.prototype.myAnimate = function (json, callback) {
       var len = this.length;
       var self = this;
       // 最后添加到队列里的内容函数
       var baseFunc = function (next) {
           var times = 0;
           for (var i = 0; i < len; i++) {
               startMove(self[i], json, function () {
                   times++;
                   console.log(times);
                   if (times == len) {
                       console.log(callback);
                       callback && callback();
                       next();
                   }
               });
           }
       }        

       this.myQueue('fx', baseFunc);

       if ( this.myQueue('fx').length == 1 ) {
           console.log('faf');
           this.myDequeue('fx');
       }


       function getStyle (obj, attr) {
           if (obj.currentStyle) {
               return obj.currentStyle[attr];
           }else {
               return window.getComputedStyle(obj,false)[attr];
           }
       }
               
       function startMove (obj, json, callblack) {
           clearInterval(obj.timer);
           var iSpeed;
           var iCur;
           var name;
           obj.timer = setInterval(function () {
               var bStop = true;
               for (var attr in json) {                            
                   if (attr === 'opacity') {                                
                       name = attr;
                       iCur = parseFloat(getStyle(obj, attr)) * 100;
                   }else {
                       iCur = parseInt(getStyle(obj, attr));
                   }                            
                   iSpeed = (json[attr] - iCur) / 7;
                   if (iSpeed > 0) {
                       iSpeed = Math.ceil(iSpeed);
                   }else {
                       iSpeed = Math.floor(iSpeed);
                   }
                   if (attr === 'opacity') {
                       obj.style.opacity = (iCur + iSpeed) / 100;
                   }else {
                       obj.style[attr] = iCur + iSpeed + 'px';
                   }
                   if (json[attr] - iCur != 0) {
                       bStop = false;
                   }
               }
               console.log(bStop);
               if (bStop) {
                   clearInterval(obj.timer);
                   callblack();
               }
           }, 30);
         }

          return this;   
 }
 jQuery.prototype.myDequeue=function(){
      var self=this;
      var queueName=arguments[0];
       var arr=this.myQueue(queueName);
       var func=arr.shift();
       if(func==undefined){
            return;
       }
      var next=function(){
          self.myDequeue(queueName);
      }
      func(next);
 }





 // 利用 return 的对象  和 myCallBacks 产生的  作用域 形成 闭包 
// 对象 里的  俩个  函数 上层作用域 都是 myCallBacks 的 ao 将 公共的
// 东西放在 ao 作用域 中  一个 函数 改变  ao 中 的 一些 值的 时候 
// 另一个  函数 便于 操作 这些 值 同时 fire 函数的 上层 作用域 也是 ao
// 而 fire 的 引用 在 对象中 可以找到 所以  fire 函数 也可以 操作 ao
// 里的 值


 jQuery.myCallBacks=function(){
      var str=arguments[0] || '';
      var arr=[];
      var fired=false;
      var firIndex=0;
      var argu;
      function fires (){
          for(;firIndex<arr.length; firIndex++){
             arr[firIndex].apply(window,argu)
          }
          if(str.indexOf('once')!=-1){
              arr=[];
              firIndex=0;
          }

      }
     return {
           add:function(func){
              arr.push(func);
              if(str.indexOf('memory')!= -1&& fired){
                  fires();
              }
              return this;
           },
           fire:function(){
               argu=arguments;
               firIndex=0;
               fired=true;
               fires(argu);
           }
     }


 }



   // 利用一个 数组 将 回调的函数 和 处理的 函数 放在 一个 数组 中 在经历过 
// 一系列 操作 后 对象 中 拥有了 done resolve fail reject 等 函数
// 返回 对象 则 形成 与 arr 形成 闭包 再 通过 循环 和 立即执行 函数
// 找到  jQuery.myCallBacks  done时 添加的 add 和  fire 形成 一一 对应 关系 


  jQuery.myDeferred=function(){
     var obj={};
     var arr=[
          [ jQuery.myCallBacks('once memory'),'done', 'resolve'],

          [ jQuery.myCallBacks('once memory'),'fail', 'reject'],

          [ jQuery.myCallBacks('once memory'),'progress', 'notity']
      ];
      var clock=true;
      for( var i=0;i<arr.length;i++){
         obj[arr[i][1]]=(function(index){
               return function(func){
                 arr[index][0].add(func);
               }

         })(i)

         obj[arr[i][2]]=(function(index){
              return function(){
                    if(clock){
                      arr[index][0].fire.apply(window,arguments);
                      arr[index][2]=='resolve'||arr[index][2]=='reject'?clock=false:'';

                    }
              }

         })(i)

      }
      return obj;
  }
    jQuery.prototype.init.prototype=jQuery.prototype;   //  立即执行 函数 预编译 完毕后 执行 时提前改变  prototyped  的 值  
    window.$=window.jQuery=jQuery;

})()