


function debounce(fun,delay){
     let timer = null;
     return function(){
          if(timer) clearTimeout(timer)
         timer = setTimeout(()=>{
              fun.apply(this, arguments)

          },delay)
     }
}

function jieliu(func,times){
     let data = new Data();
     return function(){
          let newData = new Data();
          if(newData - data > times){
                func.apply(this,arguments);
                
          }
          data = newData;

           
     }
}
// vue 原型上 定义 事件总线 供 vuecomponent 使用
Vue.prototype.$bus = new Vue();

// 子组件 中  
this.$bus.$emit('loaded');

// 非父子 组件
this.$bus.on('loaded',function(){
    fn();
     
})

//  scroll 组件中暴露了 实际 上防抖函数 中的 func
let fn = debounce(this.$refs.scroll.refresh(),200)






