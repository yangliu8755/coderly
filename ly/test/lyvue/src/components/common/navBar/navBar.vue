<template>
  <div class='navBar'>
      <div class='lefts'><slot name='left'></slot></div>
      <div class='center'><slot name='center'></slot></div>
      <div class='right'><slot name='right'></slot></div>
  </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.lefts,.center,.right{
     float:left;
     height:44px;
     

}
.right{
    width:20%;
}
.lefts{
    width:20%;
}
.center{
    width:60%;
}
.navBar::after{
    content: '';
    display: block;
    clear:both;

}
.navBar{
    height: 44px;
    line-height: 44px;
}


</style>

