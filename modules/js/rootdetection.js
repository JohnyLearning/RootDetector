
/**************************************************************************************************
*	Name    : detectroot
*	Author  : Kony
*	Purpose : This function will invoke the method of FFI integrated with the Kony App
************************************************************************************************/

function detectroot(){
	kony.print("rooted:"+rootdetection.isRooted());
	if ( rootdetection.isRooted()>=1){
	kony.print("rooted:"+rootdetection.isRooted());
		alert("The Device is Rooted");
		
	}else{
		alert("The Device is not Rooted");
	}
}


