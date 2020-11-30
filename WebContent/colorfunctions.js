/**
 * functions that handle rgb to hex conversion
 */


//function that takes an array of 3 rgb values, and converts them to hex
rgbArray = [55,55,55]

function RGBToHex(rgbArray) {
  r = rgbArray[0].toString(16);
  g = rgbArray[1].toString(16);
  b = rgbArray[2].toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}



//function that extracts rgb values from a string and returns the array
function colorStringToArray(string){

	//regex
	var reg = /\d+/g;
	result = string.match(reg); //get string array that matches the regex
	
	var rgbArray = [];
	
	//convert every result and store into rgbarry
	for(var x = 0; x < result.length; x++){
		
		rgbArray[x] = parseInt(result[x]);
	}
	
	return rgbArray; 

}
