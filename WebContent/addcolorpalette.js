/**
 * 
 */

var hex = null; 

//get list here so that the array doesn't reset when adding after refresh
var hexArray = getList("ColorPalette");

function addColorPalette(){
	
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
	
}




