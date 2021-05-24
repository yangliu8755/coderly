
<template>
   <div>
     <scroll ref='scroll'>
  <div>  
</template>

<script>
import scroll from './scroll.vue'
Vue.prototype.$bus = new Vue();
export default {
    components:{ 
           scroll
        },
    mounted(){
         let fn = this.debounce(this.$refs.scroll.refresh,200);
         this.$bus.on('loaded',()=>{
              fn();
         })

    },
    methods:{
            debounce(fun,delay){
                let timer = null;
                return function(){
                    if(timer) clearTimeout(timer)
                    timer = setTimeout(()=>{
                        fun.apply(this, arguments)

                    },delay)
                }
            }
    }

}
</script>

<style>

</style>
