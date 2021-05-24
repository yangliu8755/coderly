<template>
  <div class='BottomTabBar'>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.BottomTabBar{
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  border: solid 1px pink;
  border-radius:5px;
}
.BottomTabBar::after{
   content:'';
   display:block;
   clear:both;
}

</style>