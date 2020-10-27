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


//returns an array with the list
function getList(listname){
	var array = []; 
	if(localStorage.getItem(listname) != null){
		array = JSON.parse(localStorage.getItem(listname));
	}
	return array; //if list doesn't exist, length should be zero
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
