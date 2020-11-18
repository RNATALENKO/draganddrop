/**
 * 
 */




	
//get the pallette
var hexArray = getList("ColorPalette");

function addColorSquare(paletteId, hex){
	
	//get palette
	var palette = document.getElementById(paletteId);
	
	//create and style square
	var colorsquare = document.createElement("LI");
	colorsquare.classList.add("colorsquare");
	colorsquare.setAttribute("id", colorsquare);
	colorsquare.style.backgroundColor = hex; 
	
	//append color square to paletted
	palette.appendChild(colorsquare);
}

function loadPalette(){
	
	//if something in the array, loop through array, for each element, create list item, add the hex
	if(hexArray.length>0){
		hexArray.forEach(function(hex){
			addColorSquare("palette", hex);
		});	
	}
}
	



