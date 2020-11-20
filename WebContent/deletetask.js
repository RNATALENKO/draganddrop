/**
 * 
 */

var array = null; 

//get all elements
var allElements = document.querySelectorAll("#listitem");

console.log("all elements");
console.log(allElements);

var clickedElement = null; 

allElements.forEach(function(element){
	
	//get the element's trash div
	var trashDiv = element.querySelector("#trashDiv");
	
	//get the element's id
	var id = element.querySelector("#idDiv").innerHTML; 
	
	//when click on trash div
	trashDiv.addEventListener("click", function(){
		
		//find list that the element is in
		var listName = findList(id);
		console.log("list the element is in: ");
		console.log(listName);
		
		//remove the item from that list within storage
		var list = getList(listName);
		var updatedList = removeFromList(list, id);
		storeList(listName, updatedList);
		
		//delete from view
		//we could technically find and remove the child, or just refresh because our loadlist() function runs
		location.reload();
			
	});
});


