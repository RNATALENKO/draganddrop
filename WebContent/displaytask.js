/**
 * 
 */

var clickedElement = null; 


//inputs an element, and transfers it's html data into the display container
function injectContent(element){

	displaycontent.innerHTML = element.querySelector("#contentDiv").innerHTML;
	displaydescription.innerHTML = element.querySelector("#descriptionDiv").innerHTML;
	displaydate.innerHTML = element.querySelector("#dateDiv").innerHTML;
	displaytime.innerHTML = element.querySelector("#timeDiv").innerHTML;
	displaycolor.style.backgroundColor = element.querySelector("#colorDiv").style.backgroundColor; 
}

function hideDisplay(){

	displaycontainer.style.display= "none";
}


function displayTasks(){
	
	//get all tasks
	var allTasks = document.querySelectorAll(".listitem");
	
	console.log("all tasks to display: " );
	console.log(allTasks);
	
	
	//add an event listener to all the tasks and if it's clicked store the task
	allTasks.forEach(function(element){
		
		//store the clicked element 
		element.addEventListener("click", function(event){
			
			clickedElement = element;  //store clicked element
			
			//if target element of listener is not trash div, display content
			if(event.target.getAttribute("id") != "trashDiv"){
				injectContent(clickedElement); //inject the content of clicked element
				displaycontainer.style.display = "block"; //show display div
				
				//display the matching object from list
				var id = clickedElement.querySelector("#idDiv").innerHTML; 
				var object = getItemFromList("OpenTasks", id);
				alert(object.date);
				
			}
		});
	})
}