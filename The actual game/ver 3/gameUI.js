//NO SETUP OR DRAWING FUNCTIONS
console.log("GameUI has loaded");

let startuu = "Start"; //james
let sizeuu = 64; //james

let Button = {
	x : 200,
	y : 60,
	r : 250,
	g : 75,
	b : 75,
	opacity : 250
}

//building the ribbon 
function ribbon() {
	fill(75, 0, 0, 200);
	strokeWeight(5);
	stroke(255, 50, 50);
	rect(-5, -5, displayWidth, 150);
}

//building the start button
function startButtonText() /*james*/{
	textSize(sizeuu);
	fill(255, 255, 255);
	strokeWeight(0);
	text(startuu, 65, 90);
}
function startButton()/*james*/{ 
	this.r = Button.r;
	this.g = Button.g;
	this.b = Button.b;
	this.opacity = Button.opacity;
	fill(this.r, this.g, this.b, this.opacity)
	strokeWeight(3);
	stroke(255, 100, 100);
	rect(40, 40, Button.x, Button.y);
	startButtonText();
}

function startButtonClicked(){//this is the payload sent to the mousePressed function over at the index.
	//james
	if(mouseX > 50 && mouseY > 50 && mouseX < (50 + Button.x) && mouseY < (50 + Button.y)){
		gameStart() //this is a function in gameRules.js
		Button.r = 200;
		startuu = "GLHF;)";
		sizeuu = 50;
	}
}
//this function is the payload to the index. all set functions are called within this function. Haha function within a function. FUNCTION-CEPTION!!!!
function displayUI() {
	//ribbon
	ribbon();
	
	//calling the start button
	startButton();
}