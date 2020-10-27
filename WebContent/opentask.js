/**
 * this will move tasks from right dropzone to left, and remove from closed task storage, then save open task storage back to local
 */


var openTasks = [];
openTasks = getList("OpenTasks");


//get right draggables and the left ul
var leftlist = document.querySelector("#leftul");
var leftdropzone = document.querySelector(".leftdropzone");

var rightlist = document.querySelector("#rightul");
var rightDraggables = rightlist.querySelectorAll(".listitem");
var draggedElement = null; 

console.log("right draggables: ");
console.log(rightDraggables);





//on drag start, add the .dragging class
rightDraggables.forEach(function(draggable){
	
	draggable.addEventListener("dragstart", function(){
		
		//on drag start we set the dragged ELement
		draggedElement = draggable; 
		draggable.classList.add("dragging");
		console.log("dragged Element: ");
		console.log(draggedElement);
	});
	
	draggable.addEventListener("dragend", function(){
		draggable.classList.remove("dragging");
	})
});




//prevent the dragover from overriding drop
leftdropzone.addEventListener("dragover", function(event){
	event.preventDefault(); 
});









//on the left zone, during the drop event, 
leftdropzone.addEventListener("drop", function(){
	
	//attach dragged element to left list
	leftlist.appendChild(draggedElement);
	
	//do the update to storage, add to open tasks, remove from close tasks, then update storage with both lists
	var input = draggedElement.querySelector("#contentDiv").innerHTML; 
	var id = draggedElement.querySelector("#idDiv").innerHTML; 
	
	//create and store into task object
	var taskObject = {
			content: input, 
			id: id
	}
	
	//push the taskobject into the opent task array
	openTasks.push(taskObject);
	
	
	//remove the dragged element from the closedTask storage list
	closedTasks = getList("ClosedTasks");
	var draggedId = getId(draggedElement);
	removeItem(closedTasks, draggedId);
	
	//store the open task and closed task arrays back into storage
	storeList("ClosedTasks", closedTasks);
	storeList("OpenTasks", openTasks);
	
	
	//refresh
	location.reload(); 
	
	
}); 


