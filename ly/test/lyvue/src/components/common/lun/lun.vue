<template>
  <div class='lun'>
     {{ "store中的 状态数据为" + $store.state.age}}
      <A></A>
      <B></B>
  </div>
    
</template>

<script>
import A from './A.vue'
import B from './B.vue'
export default {
   components:{
     A,
     B,
   } 

}
</script>

<style scoped>
div.lun{
    width:100%;
    height:300px;;
}

</style>
