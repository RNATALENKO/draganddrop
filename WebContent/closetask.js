/**
 * 
 */

var closedTasks = []; 
closedTasks = getList("ClosedTasks");

//get rightdropzone
var rightdropzone = document.querySelector(".rightdropzone");
var rightlist = document.querySelector("#rightul");

//find the dragging element
var draggedElement = null; 


//get all the left draggables, make sure you query select from the list, as to not interwine left and right with draggable attribute
var leftlist = document.querySelector("#leftul");
var leftDraggables = leftlist.querySelectorAll("[draggable = true]");
console.log("left Draggables ");
console.log(leftDraggables);


//loop through all left draggables, and add a listtener for a drag start, then store in dragged element
leftDraggables.forEach(function(draggable){
	
	//on the drag start, add dragging class, to distinguish element dragged from non-dragged
	draggable.addEventListener("dragstart", function(){
		draggable.classList.add("dragging");
		draggedElement = draggable; 
		//console.log(draggedElement);
	});
	
	draggable.addEventListener("dragend", function(event){
		draggable.classList.remove("dragging");
	});
	
});



//in order for drop to work, we need to preventDefault for the drag over
rightdropzone.addEventListener("dragover", function(event){
	event.preventDefault(); 
});







//on the drop event (which isn't working right now)
rightdropzone.addEventListener("drop", function(event){
	
	
	//append the dragged element to the rightlist
	rightlist.appendChild(draggedElement);
	
	//get input and content
	var input = draggedElement.querySelector("#contentDiv").innerHTML;
	var id = draggedElement.querySelector("#idDiv").innerHTML;
	
	//add the dragged element info to a task object
	var taskObject = {
			content: input,
			id: id
	};
	
	
	//add the dragged element to the closedTasks array
	closedTasks.push(taskObject);
	
	
	//remove that dragged element from the OpenTasks storage list
	openTasks = getList("OpenTasks");
	var draggedId = getId(draggedElement);
	openTasks = removeItem(openTasks, draggedId);
	
	
	//store the closedTasks and openTasks array back to local storage to update
	storeList("ClosedTasks", closedTasks);
	storeList("OpenTasks", openTasks);
	
	//refresh location
	location.reload(); 
	
});




