let characters = [];
let trolled = [];
let enemyWidth = 40;
let score = 0;
let offset = 0;
let speed = 3;
let escaped = [];
let lives = 5;
let highScore = 0;
frameCounter = 0;

function preload(){

}

function setup() {
	createCanvas(600, 600);

	// for(let i = 0 ; i < characters.length ; i++){
	// 	characters[i].speed = 3;
	// }
}

function draw() {
	frameCounter++;
	background(51);
	for(let i = 0 ; i < characters.length ; i++){
		fill(0, 0, 255);
		characters[i].speed = speed;
		characters[i].update();
		characters[i].show();
	}
	for(let i = 0 ; i < trolled.length ; i++){
		fill(255, 0, 0);
		trolled[i].speed = speed;
		trolled[i].update();
		trolled[i].show();
	}
	for(let i = 0 ; i < escaped.length ; i++){
		fill(0, 255, 0);
		escaped[i].speed = speed;
		escaped[i].update();
		escaped[i].show();
	}
	stroke(0, 255, 0);
	noFill();
	rect(width / 2 - enemyWidth / 2, 210, enemyWidth, enemyWidth);
	stroke(1);
	fill(255);
	textSize(18);
	text('red:' + score, 15, 20);
	text('Lives Remaining: ' + lives, width - 175 , 20);
	text("High: " + highScore, 200, 20);
	if(frameCounter % 10 == 0 && random() < .5){
		characters.push(new Character());
	}
	if(characters[0] != null && characters[0].x < width / 2 - enemyWidth / 2 - enemyWidth + .1 ){
		escaped.push(characters[0])
		characters.splice(0, 1);
		lives--;
	}
	if(frameCounter % 600 == 0){
		speed += .5;
	}

	if(lives == 0){
		if(score > highScore){
			highScore = score;
		}
		frameCounter = 0;
		lives = 5;
		score = 0;
		speed = 3;
		escaped = [];
		trolled = [];
		characters = [];
	}

}

function keyPressed() {
	//if space is pressed
	if (keyCode == 32 && characters[0] != null) {
		if(characters[0].x <= width / 2 + enemyWidth / 2 && characters[0].x >= width / 2 - enemyWidth / 2
		|| characters[0].x + enemyWidth <= width / 2 + enemyWidth / 2 && characters[0].x + enemyWidth >= width / 2 - enemyWidth / 2){
			trolled	.push(characters[0]);
			characters.splice(0, 1)
			score++;
		}else {
			lives--;
		}
	}
}

class Character {
	constructor() {
		this.y = 210;
		this.w =  enemyWidth;
		this.x = width - this.w;
		this.h =  enemyWidth;
		this.speed = 0;
	}

	show() {
		rect(this.x, this.y, this.w, this.h);
	}


	update() {
		this.x -= this.speed;
	}
}
