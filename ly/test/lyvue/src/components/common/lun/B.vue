<template>
  <div>
       
       <button @click='btnClick'>减少</button>
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
                this.$store.commit('decreaceAge');
            
         }
    }

}
</script>

<style scoped>

</style>