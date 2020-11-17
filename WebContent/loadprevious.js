/**
 * Will load the previous element's data into the display container if there is a previous element
 */



//load in previous clicked element data
previousElement = getList("PreviousElement");
	
//if there is a pervious element, inject it into the displaycontainer
if(previousElement!=null){
	
	displaycontent.innerHTML = previousElement.content; 
	displaydescription.innerHTML = previousElement.description;
	displaydate.innerHTML = previousElement.date;
	displaytime.innerHTML = previousElement.time;
	displaycolor.style.backgroundColor = previousElement.color; 
}




