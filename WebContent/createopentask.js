


//array
openTasks = []; 



//creates html li item, adds to LEFT UL
function createListItem(list, description, id){
	
	//create list element 
	var listelement = document.createElement("LI");
	listelement.classList.add("listitem");
	listelement.setAttribute("id", "listitem");
	listelement.setAttribute("draggable", "true");
	
	//create content div
	var contentDiv = document.createElement("DIV");
	contentDiv.appendChild(document.createTextNode(description));
	contentDiv.setAttribute("id", "contentDiv");
	
	//create id div
	var idDiv = document.createElement("DIV");
	idDiv.appendChild(document.createTextNode(id));
	idDiv.style.display = "none";
	idDiv.setAttribute("id", "idDiv");
	
	
	//create trash div
	var trashDiv = document.createElement("DIV");
	trashDiv.appendChild(document.createTextNode("trash"));
	trashDiv.setAttribute("id", "trashDiv");
	trashDiv.classList.add("trashDiv");
	
	//add list item to left ul
	listelement.appendChild(contentDiv)
	listelement.appendChild(idDiv);
	listelement.appendChild(trashDiv);
	list.appendChild(listelement);
}




function addTask(){

	btn.addEventListener("click", function(){
		
		//text input
		var input = content.value;
		
		//id
		var id = Date.now(); 
		
		//set the object 
		var taskObject = {
				content: input,
				id: id
		}
		
		//add object to task array
		openTasks.push(taskObject);
		
		
		//store task array in local storage
		localStorage.setItem("OpenTasks", stringify(openTasks));
		
		//create the list item
		createListItem(leftul, input, id); 
		
		//refresh page to activate drag and drop
		location.reload();
	
	});
}
