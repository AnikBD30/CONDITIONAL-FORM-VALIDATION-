var input1 = document.getElementById("input1"); 
var input2 = document.getElementById("input2"); 
input1.addEventListener('input', function(){
   var bangla = input1.value;
   console.log(bangla); 
   if(bangla>100  || bangla<0){
	input1.style.background = "red"; 
   }else{
	   
	input1.style.background = "none"; 
   }
}); 
input2.addEventListener('input', function(){
	var English = input2.value;
	if(English>100 || English<0){
		input2.style.background ="red"; 
	}
	else{
		input2.style.background ="none"; 
	}
}); 