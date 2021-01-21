(()=>{
    Array.prototype.myForeach=function(func){
        var length=this.length;
        var parse = arguments[1] || window;
         for(var i=0;i<length;i++){
             func.call(parse,this[i],i,this);
         }

    }


})()