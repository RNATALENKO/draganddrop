/**
 * 
 */

var closedTasks = []; 


//get rightdropzone
var rightdropzone = document.querySelector(".rightdropzone");
var rightlist = document.querySelector("#rightul");

//find the dragging element
var draggedElement = null; 



//on the drag start get the elemnet, and set it's class to .dragging, to recognize it
var leftlist = document.querySelector("#leftul");
console.log(leftlist);
var leftDraggables = leftlist.querySelectorAll("[draggable = true]");
console.log(leftDraggables);


//loop through all left draggables, and add a listtener for a drag start, then store in dragged element
leftDraggables.forEach(function(draggable){
	
	draggable.addEventListener("dragstart", function(){
		draggable.classList.add("dragging");
		draggedElement = draggable; 
		console.log(draggedElement);
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
	
});


//function that gets dragged element's id
function getId(listelement){
		return listelement.querySelector("#idDiv").innerHTML; 
}

//function that will remove an item from an array
function removeItem(array, id){
	
	var currentObject = null;
	var currentId = "";
	
	for(var x = 0; x < array.length; x++){
		currentObject = array[x];
		currentId = currentObject["id"];
		
		if(id == currentId){
			array.splice(x,1);
		}
	}
	
	return array; 
}

