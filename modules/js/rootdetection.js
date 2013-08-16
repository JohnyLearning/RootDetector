
/**************************************************************************************************
*	Name    : detectroot
*	Author  : Kony
*	Purpose : This function will invoke the method of FFI integrated with the Kony App
************************************************************************************************/

function detectroot(){
	if ( rootdetection.isRooted()>=1){
		alert("The Device is Rooted");
		
	}else{
		alert("The Device is not Rooted");
	}
}


