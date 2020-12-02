/**
 * 
 */





	




/*
 * note: it was better to do the event listener on the list, rather then all the squares
 */

var highlighted = false; 
var highlightedColor = null;
var highlightedList = null;

var hexinput = document.querySelector

function highlightColor(){
	
		var list = document.querySelector(".palette");
		var squares = list.children;
		
		list.addEventListener("click",function(element){
			
			//if no element is highlighted
			if(!highlighted){
				
				//if element is a square, turn border on
				if(element.target.getAttribute("id")!= "palette"){
					element.target.style.border = "2px solid black";
					highlighted = true; 
					highlightedColor = element.target.style.backgroundColor; 
				}

			}	
			
			//if highlighed
			if(highlighted){
				
				//turn off all other borders
				//note in order to use for each, you'd need to convert squares from html collection to an array
				for(var x = 0; x < squares.length; x++){
					if(squares[x].style.border == "2px solid black"){
						squares[x].style.border = "none";
					}
				}
				
				//if the element clicked is not the palette i.e. square, 
				if(element.target.getAttribute("id")!="palette"){
					
					//turn on the next selected elment's border
					element.target.style.border = "2px solid black";
					highlightedColor = element.target.style.backgroundColor;
				}
				
				//show clicked element's hex inside input
				hexinput.setAttribute("value", RGBToHex(colorStringToArray(highlightedColor)));
				
				
			}		
			
			//store the selected color
			storeList("HighlightedColor", highlightedColor);
			
			//but if clicked on list or outside and any other color
			if(element.target.getAttribute("id") == "palette"){
			
				//then delete the list from local storage
				deleteList("HighlightedColor");
				
			}
		
		
	});
}
	










