<template>
  <div>
     <button @click='btnClick'>增加</button>
    
  </div>
    
</template>

<script>
export default {
    data(){
         return {
              
         }
    },
    methods:{
         btnClick(){
              this.$store.commit('increaceAge');
              
            
         }
    },
    

}
</script>

<style scoped>

</style>
