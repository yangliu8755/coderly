<template>
  <div>
     <image @onload = 'loaded'>
  </div>
    
</template>

<script>
import Scroll from 'better-scroll';
export default {
    data(){
       return {
        scroll:{}
       }
    },
    components:{
        item

    },
    mounted(){
        this.scroll = new Scroll();
    },
    methods:{
         refresh(){
              this.scroll.refresh();
         },
         loaded(){
              this.$bus.$emit('loaded');
         }
    }

}
</script>

<style>

</style>
