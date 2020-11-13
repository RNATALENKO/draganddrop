

/*note: any time you're adding a div or a property to the task object, you need to also change load list and add the property
 * otherwise it will come out undefined
 */


//array
openTasks = []; 



//creates html li item, adds to LEFT UL
function createListItem(list, content, id, taskdescription, date, time, color){
	
	//create list element 
	var listelement = document.createElement("LI");
	listelement.classList.add("listitem");
	listelement.setAttribute("id", "listitem");
	listelement.setAttribute("draggable", "true");
	
	//create content div
	var contentDiv = document.createElement("DIV");
	contentDiv.appendChild(document.createTextNode(content));
	contentDiv.setAttribute("id", "contentDiv");
	contentDiv.classList.add("contentDiv");
	
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
	
	//create task description div
	var descriptionDiv = document.createElement("DIV");
	descriptionDiv.appendChild(document.createTextNode(taskdescription));
	descriptionDiv.setAttribute("id", "descriptionDiv");
	descriptionDiv.classList.add("descriptionDiv");
	
	
	//create date div
	var dateDiv = document.createElement("DIV");
	dateDiv.appendChild(document.createTextNode(date));
	dateDiv.setAttribute("id", "dateDiv");
	dateDiv.classList.add("dateDiv");
	
	
	//create time div
	var timeDiv = document.createElement("DIV");
	timeDiv.appendChild(document.createTextNode(time));
	timeDiv.setAttribute("id", "timeDiv");
	timeDiv.classList.add("timeDiv");
	
	//create color div
	var colorDiv = document.createElement("DIV");
	colorDiv.setAttribute("id", "colorDiv");
	colorDiv.style.backgroundColor = color; 
	colorDiv.classList.add("colorDiv");
	
	//add list item to left ul
	listelement.appendChild(contentDiv)
	listelement.appendChild(idDiv);
	listelement.appendChild(trashDiv);
	listelement.appendChild(descriptionDiv);
	listelement.appendChild(dateDiv);
	listelement.appendChild(timeDiv);
	listelement.appendChild(colorDiv);
	list.appendChild(listelement);
}




function addTask(){

	createbtn.addEventListener("click", function(){
		
		//content input
		var input = content.value;
		
		//id
		var id = Date.now(); 
		
		//description 
		var taskdescription = description.value; 
		
		//date
		var dateObj = new Date(); 
		var date =  dateObj.getMonth() +1 + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
		
		//time
		var time = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
		
		//if valid hex color is input, otherwise it's white
		var colorinput = hexinput.value
		var color = validColor(colorinput)? colorinput :"#ffffff";
		
		//set the object 
		var taskObject = {
				content: input,
				id: id,
				description: taskdescription,
				date: date,
				time: time,
				color: color
		}
		
		
		//add object to task array
		openTasks.unshift(taskObject);
		
		//store task array in local storage
		localStorage.setItem("OpenTasks", stringify(openTasks));
		
		/* this method breaks down and prevents passing in the task description*/
		//create the list item
		createListItem(leftul, input, id, taskdescription, date, time, color); 
		
		//refresh page to activate drag and drop
		location.reload();
	
	});
}
