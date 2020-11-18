/**
 * 
 */

var hex = null; 
var hexArray = [];

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


//on click get valid hex input, add color square
palettebutton.addEventListener("click", function(){
	
	//get input value if valid hex
	hex = validColor(hexinput.value)? hexinput.value: null; 
	
	//if hex not null
	if(hex!= null){
		
		//add color square to palette
		//note js auto converts to rgb if you enter hex
		addColorSquare("palette", hex);
		
		//add the hex to the array
		hexArray.push(hex);
		
		//store the color palettes as list in local storage
		storeList("ColorPalette", hexArray);
	}
});


