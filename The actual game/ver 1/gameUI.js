//NO SETUP OR DRAWING FUNCTIONS
console.log("GameUI has loaded");

let Button = {
	x : 200,
	y : 50,
	r : 250,
	g : 75,
	b : 75,
	opacity : 250
}
//building the start button
function startButtonText() /*james*/{
	textSize(64);
	fill(255, 255, 255);
	text('Start', 75, 100);
}
function startButton()/*james*/{ 
	this.r = Button.r;
	this.g = Button.g;
	this.b = Button.b;
	this.opacity = Button.opacity;
	fill(this.r, this.g, this.b, this.opacity)
	rect(50, 50, Button.x, Button.y);
	startButtonText();
}

function startButtonClicked(){//this is sent to the mousePressed function over at the index.
	//james
	if(mouseX > 50 && mouseY > 50 && mouseX < (50 + Button.x) && mouseY < (50 + Button.y)){
		gameStart() //this is a function in gameRules.js
		Button.r = 200;
	}
}

//this function is the cargoship to the index. all set functions are called within this function. Haha function within a function. FUNCTION-CEPTION!!!!
function displayUI() {
	//ribbon
	rect(-5, -5, displayWidth, 150);
	
	//calling the start button
	startButton()
}