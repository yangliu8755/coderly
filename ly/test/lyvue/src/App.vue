<template>
  <div id="app">
     <router-view></router-view>
     <BottomTabBar>
      <BottomTabBarItem path='/home'>
         <span slot='corn'>图标</span>
         <div slot='conent'>首页</div>
      </BottomTabBarItem>
      <BottomTabBarItem  path='/me'>
         <span slot='corn'>图标</span>
         <div slot='conent'>我的</div>
      </BottomTabBarItem>
      <BottomTabBarItem  path='/about'>
         <span slot='corn'>图标</span>
         <div slot='conent'>关于</div>
      </BottomTabBarItem>
      <BottomTabBarItem path='/collect'>
         <span slot='corn'>图标</span>
         <div slot='conent'>收藏</div>
      </BottomTabBarItem>
     </BottomTabBar>
  </div>
</template>

<script>
import BottomTabBar from 'components/common/BottomTabBar/BottomTabBar.vue'
import BottomTabBarItem from 'components/common/BottomTabBar/BottomTabBarItem.vue'

export default {
  name: 'App',
  components:{
     BottomTabBar,
     BottomTabBarItem
     
  }
}
</script>

<style scoped>
@import './assets/css/common.css';


.BottomTabBar::after{
   content:'';
   display:block;
   clear:both;
}
</style>
