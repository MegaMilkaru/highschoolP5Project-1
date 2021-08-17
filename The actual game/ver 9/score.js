//NO SETUP OR DRAWING FUNCTIONS
console.log("score has loaded");

var hitScore = 0;

var highScore = 8;

var recordHolder = "AAA";

var valid = /^[A-Za-z]+$/; 		//for validation

let pass;						//for validation

let message;

let name;

function validateName(input){
	if (input == null){
		pass = 0;
	}
	else if (!input.match(valid)){
		message = "Only letters please :3";
		pass = 0;
	}
	else if (input.length > 3){
		message = "only 3 letters please";
		pass = 0;
	}
	else{ 
		pass = 1;
	}
}

function recordUpdate(){
	//first, this if statement checks if the record is broken or not
	if (highScore < hitScore){
		message = "Enter your initials here!";
		while(pass == 0){
			name = prompt("You hit the highscore!!!", message);
			validateName(name);
		}
		highScore = hitScore;
		recordHolder = name.toUpperCase();
		console.log(recordHolder)
	}
}

function memoryClear(){
	hitScore = 0;
	pass = 0;
	name;
}