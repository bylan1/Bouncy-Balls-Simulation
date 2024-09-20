let balls = [];
let ballDeterminant = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  system = new GSystem(balls);
  
  if(keyIsPressed && keyCode >= 49 && keyCode <= 57){
    system.changeVelocity(keyCode - 48)
  }
  
  for(let i=0; i<balls.length; i++){
    balls[i].drawCircle();
    balls[i].moveCircle();
    balls[i].checkBoundaries();

    if(sqrt(sq(abs(balls[i].getDx())) + sq(abs(balls[i].getDy()))) > 70){
      balls.splice(i, 1);
      system.removeBall(i);
    }
  }
}

function mousePressed(){
  if (ballDeterminant === true){
    balls.push(new GBall(mouseX, mouseY, random(-5, 5), random(-5, 5)));
  } else if (ballDeterminant === false) {
    balls.push(new Ball(mouseX, mouseY, random(-5, 5), random(-5, 5)));
  }
}

function keyPressed() {
  if (keyCode === 8) {
    balls.splice(0, balls.length);
    for (let i=0; i<balls.length; i++){
      system.removeBall(i);
    }
  }
  if (keyCode === 190){
    ballDeterminant = false;
  }
  if (keyCode === 191){
    ballDeterminant = true;
  }
}