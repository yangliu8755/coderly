<template>
  <div class='item'>
     <div  @click='itemClick' :style='active'>
        <span><slot name='corn'></slot></span>
        <div><slot name='conent'></slot></div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
       showObj:{},

    }
  },
  props:{
    path:{
      type:String,
      default:''  
    },
    showColor:{
      type:String,
      default:'red'
    }
  },
  methods:{
    itemClick(){
       this.$router.push({path:this.path})

    }
  },
  computed:{
    active(){
      
      return this.showObj = this.$route.path.indexOf(this.path) !== -1 ? {color:this.showColor} : {};
     
    }

  }
}
</script>

<style scoped>

.item{
   width:25%;
   float:left;
}


</style>