var moduleA = (()=>{
     var name='ly';
     var sayName = function(){
         console.log(name);
     }
     return {
        name,
        sayName
     }


})