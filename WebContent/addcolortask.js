



var hexbutton = document.getElementById("hexbutton");
var hexinput = document.getElementById("hexinput");
var color; 


function validColor(string){
	
	 var pattern = /^#[0-9A-F]{6}$/i;
	 var results = pattern.test(string);
	 console.log("string tested: " + string);
	 console.log(results);
	 return results;
}


//on button click store color
hexbutton.addEventListener("click",function(){
	
	//get color from inputbox
	var color = hexinput.value;
	
	//if valid color, store as list
	if(validColor(color)){
		storeList("Color", color);
	}
	
	
	
});



