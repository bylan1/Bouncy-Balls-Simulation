let balls = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  system = new GSystem(balls, 1);
  
  if (keyIsDown(71) === true){
    system.changeVelocity();
  }
  
  for(let i=0; i<balls.length; i++){
    if(typeof balls[i] != 'undefined'){
      balls[i].drawCircle();
      balls[i].moveCircle();
      balls[i].checkBoundaries();

      if(balls[i].getDx() > 80 || balls[i].getDy() > 80){
        system.removeBall(i)
        delete balls[i];
      }
    }
  }
}

function mousePressed(){
  balls.push(new Ball(mouseX, mouseY, random(-5, 5), random(-5, 5)));
}