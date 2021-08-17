//NO SETUP OR DRAWING FUNCTIONS
console.log("gameRules loaded");

//this checks if the game is supposed to be running
var gameOn = false;

//this checks if the level is clear of targets
var cleared;

//time
var time = 10

var timer = time;

//level gamestart
var level = 0

//building the timer
function countDown() {
	if (frameCount % 60 == 0 && timer > 0) {
		timer --;
	}
}

//this checks of the level is clear of targets
function checkClear() {
	if (targetCount.length == 0){
		cleared = true;
	}else{
		cleared = false;
	}
}

//spawn targets
var targetNo;
function spawn(){
	if (cleared == true){
		level = level + 1;
		targetNo = level * 4;
		for (let i = 0; i < targetNo; i++){
			let x = random(80, area.sizeX - 100);
			let y = random(250, area.sizeY - 100);
			let r = 64 / level;
			let b = new target(x, y, r);
			targetCount.push(b);
		}
	}
}

function existing() {
	for (let i = 0; i < targetCount.length; i++){
		targetCount[i].show();
		targetCount[i].move();
	}
}

function gameStart(){
	console.log("game BEGIN");
	gameOn = true;
}

function hitDetect () { //OOO! ALSO!!! this function is a massive payload that will be called at the "mouse clicked" in the index
	if (gameOn == true && cleared == false){
		for (let i = targetCount.length - 1; i >= 0; i--){
			if ((targetCount[i].hit(mouseX, mouseY))){
				console.log("DING!!!");
				hitScore = hitScore + 1;
				targetCount.splice(i, 1);
			}
		}
	}
}

//this is the most important funciton. if the game is supposed to be running, it sends all the nessercary functions to the draw funciton over at the index file
//this funciton locks the game functions so that way they're only called when the player is actually playing the game
function runGame() {
	checkClear();
	spawn();
	existing();
	countDown();
	if (timer == 0) {
		gameOn = false;
	}
}

//this function is just as iportant. it resets the game everytime it finishes. There's one in every javascript file
function resetRules(){
	timer = time;
	level = 0;
}