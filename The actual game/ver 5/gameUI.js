//NO SETUP OR DRAWING FUNCTIONS
console.log("GameUI has loaded");

//variables for the start button

let gameGoText = "GLHF;)"
let startuu = "Start"; //james
let sizeuu = 64;
let buttonText;

let Button = {
	x : 200,
	y : 60,
	r : 250,
	g : 75,
	b : 75,
	opacity : 250
}

//timer
function displayTime(s) {
	let min = floor(s / 60);
	let sec = s % 60;
	textSize(24);
	fill(255, 255, 255);
	text("TIME REMAINING: " + min + ':' + (nf(sec, 2)), 250, 75);
}

//building the arena
function arena() {
	fill(30, 0, 0, 40)
	stroke(200, 0, 0);
	strokeWeight(5);
	rect(10, 155, displayWidth - 15, displayHeight - 165);
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
	if (gameOn == true) {
		buttonText = gameGoText;
	}else if(gameOn == false) {
		buttonText = startuu;
		Button.r = 250
	}
	textSize(sizeuu);
	fill(255, 255, 255);
	strokeWeight(0);
	text(buttonText, 65, 90);
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
	if(mouseX > 50 && mouseY > 50 && mouseX < 50 + Button.x && mouseY < 50 + Button.y){
		gameStart() //this is a function in gameRules.js
		Button.r = 200;
		sizeuu = 50;
	}
}

//this function is the payload to the index. all set functions are called within this function. Haha function within a function. FUNCTION-CEPTION!!!!
function displayUI() {
	//ribbon
	ribbon();
	
	//calling the start button
	startButton();
	
	//calling the arena
	arena();
	
	//timer
	displayTime(timer)
}