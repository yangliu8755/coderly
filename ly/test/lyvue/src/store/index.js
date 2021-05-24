import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
let $store = new Vuex.Store({
     state:{
        id:1,
        age:10,
     },
     mutations:{
          increaceAge(store){
               store.age++;
               
          },
          decreaceAge(store){
               store.age--;
          }
     },
     actions:{
        asyncIncreaseAge(ctx){
             setTimeout(()=>{
                  ctx.commit('increaceAge');

             },2000)
        },
        asyncDecreaseAge(ctx){
            setTimeout(()=>{
                 ctx.commit('decreaceAge');

            },2000)
       }
          
     }
})
export default $store