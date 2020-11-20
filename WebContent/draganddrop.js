/**
 * 
 */

//get all draggables, must be list items
var draggables = document.querySelectorAll(".listitem");

console.log("draggables are: " + draggables);


//get all dropzones
var dropzones = document.querySelectorAll(".dropzone");




//loop through draggables, and set dragstart and drag end for all
draggables.forEach(function(draggable){
	
	//print id's of draggables
	console.log(draggable.getAttribute("id"));
	
	
	draggable.addEventListener("dragstart", function(){
		draggable.classList.add("dragging");
		console.log("dragging: " + draggable.getAttribute("id"));
	});
	
	draggable.addEventListener("dragend", function(){
		draggable.classList.remove("dragging");
	});
	
});


//loop through dropzones to move it around the containers
dropzones.forEach(function(dropzone){
	
	dropzone.addEventListener("dragover", function(event){
		event.preventDefault();
		
		//get element that's currently being dragged, append to list not drop zone
		var draggable = document.querySelector(".dragging");
		
		console.log("draggable is: " + draggable);
		
		var dropzonelist = dropzone.firstElementChild;
		console.log("zone is:"  + dropzonelist.getAttribute("id") );
		dropzonelist.appendChild(draggable);
		
	});
});