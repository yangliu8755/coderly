function axios (method = 'get',url,data,flag){
    return new Promise((resolve,reject)=>{
        let  aj=null;
   	      	  if(window.XMLHttpRequest){
   	      	  	 aj=new XMLHttpRequest()
   	      	  }else{
   	      	  	 aj=new ActiveXObject('Microsoft.XMLHttp');
   	      	  }
   	      	   aj.onreadystatechange=function(){
   	      	   	 
   	      	  	  if(aj.readyState==4 && aj.status==200){
   	      	  	  
   	      	  	  	  resolve(aj.response);
   	      	  	  }

   	      	  }
   	      	  if(method=='GET'){
   	      	  	  aj.open(method,url+'?'+data,flag);
   	      	  	  aj.send();

   	      	  }else if(method=='POST'){
   	      	  	  aj.open(method,url+'?',flag);
   	      	  	  aj.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   	      	  	  aj.send(data);
   	      	  }
    })
}
axios.get = function(method,url,data,flag){
     return this(method,url,data,flag);

}
