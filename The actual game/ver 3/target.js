//NO SETUP OR DRAWING FUNCTIONS
console.log("target has loaded");

let targets = [];

//defining velocity for the target(used in the move function of target)
let vx = 2;
let vy = 2;	//left at this number for now

class target {
	constructor(x, y, r){ //x position, y position, colour (changes with levels), stroke colour (also changes with levels), radius (yes, changes with levels too)
		this.x = x;
		this.y = y;
		this.r = r;
		this.vx = vx
		this.vy = vy
	}
	
	//movement of the target
	move(){
		this.y = this.y + this.vy
		this.x = this.x + this.vx
	
		// Bounce when touch the edge of the canvas
		if (this.x < 0 + this.r) { 
			//this.x = this.r;
			this.vx = -this.vx;
		}
		if (this.y < 0 + this.r) { 
			//this.y = this.r;
			this.vy = -this.vy;
		}
		if (this.x > displayWidth - this.r) { 
			//this.x = displayWidth - this.r; 
			this.vx = -this.vx;
		}
		if (this.y > displayHeight - this.r) { 
			//this.y = displayHeight - this.r; 
			this.vy = -this.vy;
		}
	}
	
	//hit detection (its defined here but its used in the hit detection payload over at "gameRules.js")
	hit(px, py){
		let d = dist(px, py, this.x, this.y)
		if (d < this.r) {
			return true;	
		}else{
			return false;
		}
	}
	
	show() {
		stroke(255, 100, 100);
		strokeWeight(3);
		fill(200, 50, 50, 100);
		ellipse(this.x, this.y, this.r * 2);
	}
}
