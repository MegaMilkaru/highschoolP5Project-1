//NO SETUP OR DRAWING FUNCTIONS
console.log("GameUI has loaded");
var colourChange;
//radio buttons for changing the colour
function radioButtons() {			//this one isnt sent to the draw function payload. instead, its sent to the setup directly
	colourChange = createRadio();
	colourChange.style('color', '#FFFFFF');
	colourChange.option('red', 'red');;
	colourChange.option('green', 'green');
	colourChange.option('blue', 'blue');
	colourChange.option('pink', 'pink');
	colourChange.style('font-size', '40px');
	colourChange.position(900, 50);
}

//predefining the selection function's variables. so that way there is a default
var colButton = {
	r : 250,
	g : 75,
	b : 75,
}
var colRibbon = {
	fill : [75, 0, 0, 200],
	stroke : [255, 50, 50],
}
var colArena = [200, 0, 0];
var colText = [255, 50, 50];
var colTarget = [255, 100, 100];
var colTargetfill = [200, 50, 50, 100];

function selection(){
	if (colourChange.value() == 'red'){
		colButton = {
			r : 250,
			g : 75,
			b : 75,
		}
		colRibbon = {
			fill : [75, 0, 0, 200],
			stroke : [255, 50, 50],
		}
		colArena = [200, 0, 0];
		colText = [255, 50, 50];
		colTarget = [255, 100, 100];
		colTargetfill = [200, 50, 50, 100];
	}
	else if (colourChange.value() == 'green'){
		colButton = {
			r : 75,
			g : 250,
			b : 75,
		}
		colRibbon = {
			fill : [0, 75, 0, 200],
			stroke : [50, 255, 50],
		}
		colArena = [0, 200, 0];
		colText = [50, 255, 50];
		colTarget = [100, 255, 100];
		colTargetfill = [50, 200, 50, 100];
	}
	else if (colourChange.value() == 'blue'){
		colButton = {
			r : 75,
			g : 75,
			b : 250,
		}
		colRibbon = {
			fill : [0, 0, 75, 200],
			stroke : [50, 50, 255],
		}
		colArena = [0, 0, 200];
		colText = [50, 50, 255];
		colTarget = [100, 100, 255];
		colTargetfill = [50, 50, 200, 100];
	}
	else if (colourChange.value() == 'pink'){
		colButton = {
			r : 250,
			g : 75,
			b : 250,
		}
		colRibbon = {
			fill : [50, 0, 50, 200],
			stroke : [255, 50, 255],
		}
		colArena = [200, 0, 200];
		colText = [255, 50, 255];
		colTarget = [255, 100, 255];
		colTargetfill = [200, 50, 200, 100];
	}
}

//variables for the arena
var area = {
	placementX : 10,
	placementY : 155,
	sizeX : window.innerWidth - 40, //I had to add these so that I could use these variables somewhere else, like the target collision detection.
	sizeY : window.innerHeight - 185
}

//variables for the start button
var Button = {
	x : 200,
	y : 60,
	r : colButton.r,
	g : colButton.g,
	b : colButton.b,
	opacity : 250,
}

var gameGoText = "GLHF;)";
var	startuu = "Start";
var buttonText = startuu;
var sizeuu = 64;

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
	fill(0, 0, 0);
	stroke(colArena);
	strokeWeight(5);
	rect(area.placementX, area.placementY, area.sizeX, area.sizeY);
}

//building the ribbon 
function ribbon() {
	fill(colRibbon.fill);
	strokeWeight(5);
	stroke(colRibbon.stroke);
	rect(-5, -5, displayWidth, 150);
}

//building the start button
function startButtonText() {
	if (gameOn == true){
		buttonText = gameGoText;
	}else if(gameOn == false){
		buttonText = startuu;
	}
	textSize(sizeuu);
	fill(255, 255, 255);
	strokeWeight(0);
	text(buttonText, 65, 90);	//error coming from here
}
function startButton(){ 	
	this.r = Button.r;
	this.g = Button.g;
	this.b = Button.b;
	this.opacity = Button.opacity;
	fill(this.r, this.g, this.b, this.opacity);
	strokeWeight(3);
	stroke(colText);
	rect(40, 40, Button.x, Button.y);
	startButtonText();
}

function startButtonClicked(){
	if(mouseX > 50 && mouseY > 50 && mouseX < 50 + Button.x && mouseY < 50 + Button.y){
		gameStart() //this is a function in gameRules.js
		Button.r = 200;
		sizeuu = 50;
	}
}
//the function below will display the current score's and what not
function displayHighScore(){
	fill(255, 255, 255);
	strokeWeight(4);
	stroke(colText);
	text("HighScore(" + recordHolder + "): " + highScore, 520, 100);
}

function displayScore(){
	fill(255, 255, 255);
	strokeWeight(4);
	stroke(colText);
	text("CurrentScore: " + hitScore, 520, 50);
}

function displayUI() {
	ribbon();
	
	startButton();
	
	arena();
	
	displayTime(timer);
	
	displayHighScore();
	
	displayScore();
	
	selection();
}

function resetGameUI() {
	sizeuu = 64;
	Button = {
	x : 200,
	y : 60,
	r : colButton.r,
	g : colButton.g,
	b : colButton.b,
	opacity : 250
	}
	buttonText = startuu;
}