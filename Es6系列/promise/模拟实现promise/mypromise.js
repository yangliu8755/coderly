let myPromise=(function(){
    const pending='pending',
          resolved='resolved',
          rejected='rejected', 
          changeStatus=Symbol('changeStatus'),
          creatPromise=Symbol('creatPromise');
  return  class myPromise{
        [changeStatus](prevStatus,val,quen){
              if(this.status !== pending){
                  return ;  
              }
               this.status=prevStatus;
               this.statusValue=val;
               if(quen.length > 0){
                 quen.forEach((ele)=>{
                     setTimeout(()=>{
                      ele(this.statusValue);
                     },0)
                     

                 })
               }  


        }
        static resolved(data){
           return new myPromise((resolve,reject)=>{
                     resolve(data);

           })
        }
        static rejected(err){
             return new myPromise((resolve,reject)=>{
                     reject(err);

           })

        }
        static all(proArr){
            return new myPromise((resolve,reject)=>{
                 let arr = proArr.map((ele)=>{
                      let obj={
                           resultVal:undefined,
                           done:false
                      }
                      ele.then((result)=>{
                           obj.resultVal=result;
                           obj.done=true;
                          let ss= arr.filter((o)=>{
                                return  !o.done;

                           })
                          if(ss.length==0){
                               resolve(arr.map(ele=> ele.resultVal));
                          }
                      },(err)=>{
                           reject(err);
                      })

                      return obj;
                       

                 })
            })
        }
        static race(proArr){
            return new myPromise((resolve,reject)=>{
                 proArr.forEach((ele)=>{
                       ele.then((result)=>{
                              resolve(result);
                       },(err)=>{
                         reject(err);
                       })

                 })
            })
        }

        [creatPromise](res,rje){
            return new myPromise((resolve,reject)=>{
                 this.handle(resolved,(data)=>{
                        try{
                            let result=res(data);
                             if(result instanceof  myPromise){
                                  result.then((data)=>{
                                        resolve(data);
                                        return ;
                                  },(err)=>{
                                       resolve(err);
                                       return ;

                                  })
                             }else{
                                 resolve(result);
                             }
                         
                        }catch(err){
                              reject(err);
                        }
                 },this.thenRess);
                 this.handle(rejected,(err)=>{
                        try{
                            let result=rje(err);
                             if(result instanceof  myPromise){
                                  result.then((data)=>{
                                        resolve(data);
                                        return ;
                                  },(err)=>{
                                       resolve(err);
                                       return ; 
                                  })}else{
                                       resolve(result);
                                  }
                        
                        }catch(error){
                              reject(error);
                        }
                 },this.thenRjes);

            })
        }
        handle(prevStatus,res,que){
             if(this.status==prevStatus){
                 setTimeout(()=>{
                      res(this.statusValue);
                 },0)
                  
             }else{
                  que.push(res);

             }

        }

        then(res,rje){
            return this[creatPromise](res,rje);
          this.catch(rje);
        }
        catch(rje){
          return this[creatPromise](undefined,rje);
        }
        constructor(eaxu){
             this.status=pending;
             this.statusValue=undefined;
             this.thenRess=[];
             this.thenRjes=[];
             let resolve=(val)=>{
                   this[changeStatus](resolved,val,this.thenRess);


             }
             let reject=(err)=>{
                  this[changeStatus](rejected,err,this.thenRjes);

             }
             try{
              eaxu(resolve,reject);
             }catch(err){
              reject(err);
             }
             

        }
  }

})()