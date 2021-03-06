/**
 * 
 */

var clickedElement = null; 
var mergedArray = null; 
var previousElementArray = [];



//inputs an element, and transfers it's html data into the display container
function injectContent(element){

	displaycontent.innerHTML = element.querySelector("#contentDiv").innerHTML;
	displaydescription.innerHTML = element.querySelector("#descriptionDiv").innerHTML;
	displaydate.innerHTML = element.querySelector("#dateDiv").innerHTML;
	displaytime.innerHTML = element.querySelector("#timeDiv").innerHTML;
	displaycolor.style.backgroundColor = element.querySelector("#colorDiv").style.backgroundColor; 
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
				
				
				//get the open and closed task lists
				openTasks = getList("OpenTasks");
				closedTasks = getList("ClosedTasks");
				
				//merge lists
				mergedArray = mergeArrays(openTasks, closedTasks);
				
				//store mergedlist
				storeList("MergedList",mergedArray);
				
				//retreive id of clicked element and retrieve from merged list
				var id = clickedElement.querySelector("#idDiv").innerHTML; 
				var previousElementObject = getItemFromList("MergedList", id)
				previousElementArray.push(getItemFromList("MergedList", id));
				
				//store the object as previously clicked element
				storeList("PreviousElement", previousElementObject);
				
				//change width of headings
				opentaskheading.style.width = "50%";
				
			}
		});
	})
}