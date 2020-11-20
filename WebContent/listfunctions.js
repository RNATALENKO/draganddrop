/**
 * 
 */



//converts array to string
function stringify(array){
	return JSON.stringify(array);
}


//stores an array as the listname in local storage
function storeList(listname, array){
	localStorage.setItem(listname, stringify(array));
}

//checks to see if a list exists
function listExists(listName){
	var list = getList(listName);
	if(list.length == 0){
		return false;
	}
	return true; 
}


//returns an array with the list
function getList(listname){
	var array = []; 
	if(localStorage.getItem(listname) != null){
		array = JSON.parse(localStorage.getItem(listname));
	}
	return array; //Note: if list doesn't exist, length should be zero
}



//gets a list element's id
function getId(listelement){
		return listelement.querySelector("#idDiv").innerHTML; 
}


//removes an item from an array based on it's id, returns new array
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







//function that finds an element either in open or closed task list then returns the list
function findList(id){
	
	var list = ""; 
	var leftlist = getList("OpenTasks");
	var rightlist = getList("ClosedTasks");
	
	//loop through left list, if match return left list
	leftlist.forEach(function(item){
		
		var listId = item["id"];
		console.log(listId);
		
		if(id == listId){
			console.log("left match");
			list = "OpenTasks";  
		}	
	});
	
	rightlist.forEach(function(item){
		
		var listId = item["id"];
		console.log(listId);
		
		if(id == listId){
			console.log("right match");
			list = "ClosedTasks"; 
		}
	});
	
	return list; 
}

//removes item from list but returns an array of the list
function removeFromList(list, id){
	
	var array = Array.from(list);
	
	for(var x = 0; x < array.length; x++){
		
		var currentObject = array[x];
		var objectId = currentObject["id"];
		
		if(objectId == id){
			array.splice(x,1);
		}	
	}
	
	return array; 
}

//returns the data of the object based on Id
function getItemFromList(listName, id){
	
	//get the list array
	var array = getList(listName);
	var currentObject = null; 
	
	//get the matching object
	array.forEach(function(element){
		
		if(id == element.id){
			currentObject = element; 
		}
	});
	
	return currentObject; 
}

//a function that merges two lists and returns the merged array
//but if one is null or empty return the other
function mergeArrays(listOneArray, listTwoArray){
	
	var listThreeArray = null; 
	
	//if both list arrays are not empty
	if(listOneArray.length > 0 && listTwoArray.length> 0){
		listThreeArray = listOneArray.concat(listTwoArray);
	}
	else if(listOneArray.length == 0){
		return listTwoArray; 
	}
	else if(listTwoArray.length == 0){
		return listOneArray;
	}
	
	return listThreeArray; 
	
}


//extracts the properties of html element's subchildren
function htmlToObject(element){
	
	var object= {
			content: element.querySelector("#contentDiv").innerHTML,
			id: element.querySelector("#idDiv").innerHTML,
			description: element.querySelector("#descriptionDiv").innerHTML,
			date: element.querySelector("#dateDiv").innerHTML,
			time: element.querySelector("#timeDiv").innerHTML,
			color: element.querySelector("#colorDiv").style.backgroundColor
	};
	
	return object;
}




