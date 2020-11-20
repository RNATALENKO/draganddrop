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



//on the drop event transfer the data to the appropriate list, delete it from the opposite list
dropzones.forEach(function(dropzone){
	
	dropzone.addEventListener("drop", function(){
		
		var draggable = document.querySelector(".dragging"); //get dragging element
		var draggableId = getId(draggable); //get id of dragged element
		var dropzonelist = dropzone.firstElementChild; //get current drop zone
		openTasks = getList("OpenTasks"); //get array from open tasks
		closedTasks = getList("ClosedTasks"); //get array from closed tasks
		
		
		//if dropzone list rightul and id does not exist in closed tag
		if(dropzonelist.getAttribute("id") == "rightul"){
			
			//push and remove only if element doesn't exist
			if(getItemFromList("ClosedTasks", draggableId) == null){
				
				//add to the closed task list
				closedTasks.push(htmlToObject(draggable));
				storeList("ClosedTasks", closedTasks);
				
				//remove from open tasks array, store it back in
				removeItem(openTasks, draggableId)
				storeList("OpenTasks", openTasks);
			}
		}
		
		//if left dropzone
		else if(dropzonelist.getAttribute("id") == "leftul"){
			
			//if item doesn't exist in open tasks
			if(getItemFromList("OpenTasks", draggableId) == null){
				
				//add draggabl to the open tasks array
				openTasks.push(htmlToObject(draggable));
				storeList("OpenTasks", openTasks);
				
				//delete from closed tasks and store
				removeItem(closedTasks, draggableId);
				storeList("ClosedTasks", closedTasks);
				
			}
				
		}
		
	});
});


