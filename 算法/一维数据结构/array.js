
//   数组特点：
//   数组在存储空间上是连续的
//   数组底层定长，数组扩容时 需要 开辟新的内存空间并复制数据
//   数组 增加和 删除 数据 困难
let arr = [1,2,3,4,5];
function bianli(arr){
    if(arr == null){
       return ;
    }
    for(let i=0;i<arr.length;i++){
         console.log(arr[i]);
    }
     
}
bianli(arr);
    
    
