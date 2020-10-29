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
}


function displayTasks(){
	
	//get all tasks
	var allTasks = document.querySelectorAll(".listitem");
	
	
	console.log("all tasks to display: " );
	console.log(allTasks);
	
	//add an event listener to all the tasks and if it's clicked store the task
	allTasks.forEach(function(element){
		
		//store the clicked element 
		element.addEventListener("click", function(){
			clickedElement = element; 
			injectContent(clickedElement);
			displaycontainer.style.display = "block";
		});
	})
}