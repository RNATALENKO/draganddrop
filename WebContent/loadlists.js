/**
 * 
 */



//to prevent undefined html elements, add them to the load list functions


function loadLists(){
	

	openTasks = getList("OpenTasks");
	closedTasks = getList("ClosedTasks");
	
	
	//for each open task, create element, load them into leftul
	openTasks.forEach(function(task){
		
		createListItem(leftul, task["content"], task["id"], task["description"], task["date"], task["time"], task["color"]);
		
	});
	
	//for each closedTask, create element, load them into rightul
	closedTasks.forEach(function(task){
		createListItem(rightul, task["content"], task["id"], task["description"], task["date"], task["time"], task["color"]);
	})
	
}


