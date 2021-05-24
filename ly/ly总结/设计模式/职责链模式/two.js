function upload(){
  if(currentEnvHtml5()){
     runHtml5()
     return ;
  }
  if(currentEnvFlash()){
     runFlash();
     return 
  }
}