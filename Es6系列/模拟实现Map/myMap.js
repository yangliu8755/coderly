let myMap=(()=>{
    return class myMap{
         constructor(itor=[]){
               this.data=[];
               if(this.isItor(itor)){
                     let it=itor[Symbol.iterator]();
                     if(this.isItor(it)){
                         let obj=it.next();
                        while(!obj.done){
                             let itor=obj.value[Symbol.iterator]();
                         let key = itor.next().value;
                         let value = itor.next().value;
                              this.set(key,value);
                              obj=it.next();
                           }
                     }
                     
               }else{
                    throw new Error('非迭代');
               }
         }
         isItor(itor){
             if(typeof (itor[Symbol.iterator]) == 'function'){
                 return true;
             }
             return false;
         }
         set(key,value){
             if(this.has(key)){
                 let item = this.getVal(key);
                 item.value = value;
             }else{
              
               this.data.push({
                     key,
                     value
               });

             }

         }
         delete(key){
              for(let i=0;i<this.data.length;i++){
                    if(this.isEqual(key,this.data[i].key)){
                     this.data.splice(i,1);
                     return true;
                    
                    }

              }
              return false;
         }
         get(key){
              if(this.getVal(key)){
                   return this.getVal(key).value;
              }else{
                   return undefined;
              }
         }
         clear(){
              this.data.length=0;
         }
         has(key){
              if(this.getVal(key)){
                   return true;
              }else{
                   return false;
              }
         }
         getVal(key){
             for(let item of this.data){
                   if(this.isEqual(item.key,key)){
                        return item;
                   }
              
             }
             return undefined;

         }
         isEqual(item1, item2){
                  if(item1 == 0 && item2==0){
                       return true;
                  }
                  return Object.is(item1,item2);

          }
          // 实现map是 可迭代的 （利用生成器实现 因为生成器就是迭代器）
        *[Symbol.iterator](){
            for(let item of this.data){
                 yield [item.key,item.value];
            }

        }

    }


})()