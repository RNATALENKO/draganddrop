/**
 * 
 */




function hideDisplay(){


	if(!listExists("PreviousElement")){
		displaycontainer.style.display="none";
	}
	else{
		displaycontainer.style.display="block";
	}

}


//method will adjust width of open/closed task heading if displaycontainer not visible
function adjustwidth(){
	
	if(displaycontainer.style.display="none"){
		opentaskheading.style.width = "78%";
	}
	else{
		opentaskheading.style.width="50%";
	}
}