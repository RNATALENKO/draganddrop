/**
 * 
 */


//returns an array with the list
function getList(listname){
	var array = []; 
	if(localStorage.getItem(listname) != null){
		array = JSON.parse(localStorage.getItem(listname));
	}
	return array; //if list doesn't exist, length should be zero
}

function storeList(listname, array){
	localStorage.setItem(listname, JSON.stringify(array));
}


function loadLists(){
	
	

	openTasks = getList("OpenTasks");
	closedTasks = getList("ClosedTasks");
	
	
	//for each open task, create element, load them into leftul
	openTasks.forEach(function(task){
		
		createListItem(leftul, task["content"], task["id"]);
		
	});
	
	//for each closedTask, create element, load them into rightul
	closedTasks.forEach(function(task){
		createListItem(rightul, task["content"], task["id"]);
	})
	
}


