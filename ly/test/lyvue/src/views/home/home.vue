<template>
  <div>
     <nav-bar class='navBar'>
          <div slot='center'>
              <span>购物车</span>
          </div>
     </nav-bar>
     <lun-bar></lun-bar>
     <control-bar :hobitArr="['流行','新款','精选']"></control-bar>
    
     
     
  </div>
</template>

<script>
// 公共组件
import navBar from 'components/common/navBar/navBar.vue'
import lunBar from 'components/common/lun/lun.vue'

import controlBar from 'components/content/control/controlBar.vue'

export default {
  name: 'home',
  components:{
     navBar,
     lunBar,
     controlBar
  }

}
</script>

<style scoped>
.navBar{
  text-align: center;
  background-color:pink;
  border-radius:5px;
}

</style>