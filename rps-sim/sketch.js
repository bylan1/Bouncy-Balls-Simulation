let balls = [];

function setup() {
  createCanvas(750, 750);
}

function draw() {
  background(200);
  
  for(let i=0; i<balls.length; i++){
    balls[i].drawCircle();
    balls[i].moveCircle();
    balls[i].checkBoundaries();
    
    if (balls.length > 1){
      for (let j=i; j<balls.length; j++){
        environment = new CollisionEnv(balls[i], balls[j]);
        if(environment.collisionReaction()){
          if(balls[i].getVelocity() > balls[j].getVelocity()){
            let ind = balls[j].getColIndex();
            balls[i].setColIndex(ind);
          } else if(balls[j].getVelocity() > balls[i].getVelocity()){
            let ind = balls[i].getColIndex();
            balls[j].setColIndex(ind);
          }
        }
      }
    }
  }
}

function mousePressed(){
  balls.push(new Ball(mouseX, mouseY, random(-5, 5), random(-5, 5), 20, floor(random(3))));
}

function keyPressed() {
  if (keyCode === 8) {
    balls.splice(0, balls.length);
    for (let i=0; i<balls.length; i++){
      system.removeBall(i);
    }
  }
}