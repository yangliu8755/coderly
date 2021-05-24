//获取最大利润
// 换句话说 就是 从左网又  最小的数和 和 最小的数 右边的 数的差值
function getMax(arr){
     if(arr.length == 0) return
     let max = 0;

     for(let i = 0;i<arr.length;i++){
        for(let j = i+1; j<arr.length;j++){
             if(arr[j]-arr[i] > max){
                  max = arr[j]-arr[i];
             }
        }

     }
     return max;

}


//  m 瓶汽水 每俩瓶换 一瓶汽水 能喝 多少瓶汽水的 问题
function getButonNum(total,exchange){
    if(total <= 0) return 0;
    let origin = total;
    let sum = 0;
    while(total > (exchange - 1)){
         total -= (exchange - 1);
         sum++
    }
    return origin + sum;

}
// console.log(getButonNum(5,2));


// 整数拆分 问题 如果数组内数组 之和 大于 9 的话 继续 拆分新数组 直到 数组 内的和 小于9 之后 返回
function getNumSum(num) {
           var arr = (("") + num).split("");
               var total = 0;
               console.log(arr)
             for (var i in arr) {
                    total += Number(arr[i]);
                }
                console.log(total)
                if (total > 9) {
                    getNumSum(total)
                } else {
                    return total;
                }
}
// console.log(getNumSum(145))





//  数组 从 后三位开始 算起 如果前 俩位的值 大于 第三位的 就返回
function maxRound(str) {
              var arr = str.sort((a, b) => {
                    return a - b;
                })
               console.log(arr);
                var total = 0;
                if (arr.length >= 3) {
                    for (var i = arr.length - 3; i >= 0; i--) {
                        if (arr[i] + arr[i + 1] > arr[i + 2]) {
                            total = arr[i] + arr[i + 1] + arr[i + 2]
                        }
                    }
                }
                console.log(total)
                return total;
}





        function getStep(num) {
                var sum = 0;
                if (num == 0) return 0;
                while (num > 0) {
                    if (num % 2 == 0) {
                        num /= 2 
                        console.log(num);
                    } else {
                        num -= 1
                    }
                    sum++
                }
                return sum
            }
    console.log(getStep(7))
    

