//  es6 代码 模拟 实现set 
let mySet=(()=>{
    return class mySet{
           constructor(itrator = []){
                  this.data=[];
                  if(typeof itrator[Symbol.iterator] === 'function'){
                         for(let item of itrator){
                               this.add(item);
                         }
                  }


           }
         add(item){
               if(this.has(item)){
                   return ;

               }else{
                    this.data.push(item);
               }


         }
         has(item){
              return this.getVal(item);


         }
         delete(item){
                  for(let i=0;i<this.data.length;i++){
                         if(this.isEqual(item,this.data[i])){
                                this.data.splice(i,1);
                                return true;
                         }
                  }
                  return false;
         }
         clear(){
                this.data.length=0;
         }
         getVal(item){
                 for(let s of this.data){
                      if(this.isEqual(s,item)){
                           return true;
                      }
                 }
                 return false;

         }
         isEqual(item1, item2){
                 if(item1 == 0 && item2==0){
                      return true;
                 }
                 return Object.is(item1,item2);

         }

    }
})()