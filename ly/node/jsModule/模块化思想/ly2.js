var moduleB = (()=>{
    var name='ly2';
    var sayName = function(){
        console.log(name);
    }
    return {
       name,
       sayName
    }


})