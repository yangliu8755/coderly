<template>
  <div>
     <item></item>
  </div>
    
</template>

<script>
import Scroll from 'bette-scroll'
export default {
    data(){
       return {
        scroll:{}
       }
    },
    components:{
        item

    },
    methods:{
         refresh(){
              this.scroll.refresh();
         }
    }

}
</script>

<style>

</style>
