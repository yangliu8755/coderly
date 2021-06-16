
// 排序的本质是 比较和交换
let arr = [9,6,10,5,1,30];
function compare(a,b){
     if(a<b){
        return true;
     }else{
        return false;
     }
   
}
function exchange(arr,i,j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 冒泡排序
function bubble(arr){
  if(arr == null) return;
   for(let i=0; i< arr.length; i++){
        for(let j=0;j<arr.length-1-i;j++){
            if (compare(arr[j],arr[j+1])){
                exchange(arr,j,j+1);
            }
        }
      
   }
   
}
// bubble(arr);

// 选择排序
function chose(arr){
  if(arr == null) return;
   for(let i=0; i< arr.length; i++){
      let maxIndex = 0;
        for(let j=0;j<arr.length-i;j++){
           if(compare(arr[maxIndex],arr[j])){
               maxIndex = j;
           }
          
        }
        exchange(arr,maxIndex,arr.length-i-1);
      
   }
   
}
chose(arr)
console.log(arr);
