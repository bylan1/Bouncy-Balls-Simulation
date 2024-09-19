let balls = [];

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
    if(typeof balls[i] != 'undefined'){
      balls[i].drawCircle();
      balls[i].moveCircle();
      balls[i].checkBoundaries();

      if(sqrt(sq(abs(balls[i].getDx())) + sq(abs(balls[i].getDy()))) > 100){
        system.removeBall(i)
        delete balls[i];
      }
    }
  }
}

function mousePressed(){
  balls.push(new GBall(mouseX, mouseY, random(-5, 5), random(-5, 5)));
}