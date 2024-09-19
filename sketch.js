let balls = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  
  for(let i=0; i<balls.length; i++){
    balls[i].drawCircle()
    balls[i].moveCircle()
    balls[i].checkBoundaries()
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY))
}