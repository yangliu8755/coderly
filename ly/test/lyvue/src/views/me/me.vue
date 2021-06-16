<template>
  <div ref='a'>
      <p>{{ name }}</p>
      <p>{{ age }}</p>
      <span v-for = "item in page" :key="item">{{ item }}</span>
      <p @click="add"><button>修改</button></p>
       <p @click="getMes"><button>获取</button></p>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
       name:'ly',
       age:'13',
       hobbit:{
           years:"10",
           hobbitName:'篮球'
       },
       page:[1,2,5],
       pageIndex:6,
       
    }
  },
  mounted(){
      
  },
  methods:{
    add(){
      //  this.page[0] = 0;
      //  console.log(this.page) 
       // 直接改 数据不会形成 响应式 数据 
       // 对象本身和对象内的属性会 被检测 数组本身会被检测
       // 添加或者修改对象内的属性 不会响应 修改数组下表 不会被响应。
       this.$set(this.page,'0',10)

    },
    getMes(){
      // this.name = 'zy';
      this.$nextTick(()=>{
         console.log(this.$refs['a'].innerHTML);

      }) 
      this.name = 'zy';
      // nextTick 传入的函数 也会加入到 微任务队列中
      // 数据更新后 派发的 watcher 也会 加入到 微任务队列中 
      // 所以 将nextTick 放在代码执行最上方 获取到的数据为 为 更新的数据
      // 先修改数据 再 nextTick 时 获取到的是 render 之后的数据。（更新后的数据）
      
      
    }
   
  
     
  }


}
</script>

<style scoped>

</style>