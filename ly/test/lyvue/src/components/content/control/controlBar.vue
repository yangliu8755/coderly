<template>
   <div> 
      <span v-for="(item,index) in hobitArr" @click='spanClick(index)' :class='{active: index == curIndex ? true : false}'>{{ item }}</span>
   </div>
</template>

<script>
export default {
    data(){
         return{
              curIndex:0
         }
    },
    props:{
       showColor:{
          type:String,
          default:'red'

       },
       hobitArr:{
           type:Array,
           default(){
                return []
           }
       }
    },
    methods:{
         spanClick(index){
             this.curIndex = index;
         },
    },
    computed:{
        
    }

}
</script>

<style scoped>
  /* div::after{
      content: '';
      display:block;
      clear:both;
  } */
  div{
    display:flex
  }
  div>span{
      flex:1;
  }
  .active{
      color:red;
  }

</style>
