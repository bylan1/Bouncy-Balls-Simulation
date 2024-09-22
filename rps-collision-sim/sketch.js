let balls = [];
let moving = true;
let movementDx = [];
let movementDy = [];

function setup() {
  createCanvas(750, 750);
}

function draw() {
  background(200);
  
  for(let i=0; i<balls.length; i++){
    balls[i].drawCircle();
    balls[i].moveCircle();
    balls[i].checkBoundaries();
    system = new GSystem(balls);
    
    if (balls.length > 1){
      for (let j=i+1; j<balls.length; j++){
        environment = new CollisionEnv(balls[i], balls[j]);
        system.changeVelocity(0.1, moving);
        
        if(environment.highSpeedCollision() && balls[i].getColIndex() != balls[j].getColIndex()){
          balls.push(merge(balls[i], balls[j]));
          
          movementDx.splice(j, 1);
          movementDy.splice(j, 1);
          system.removeBall(j);
          
          movementDx.splice(i, 1);
          movementDy.splice(i, 1);
          system.removeBall(i);
          
          continue;
        }
        
        if(environment.collisionReaction()){
          if(balls[j].getVelocity() > balls[i].getVelocity()){
            let ind = balls[j].getColIndex();
            balls[i].setColIndex(ind);
          } else if(balls[i].getVelocity() > balls[j].getVelocity()){
            let ind = balls[i].getColIndex();
            balls[j].setColIndex(ind);
          }
        }
      }
    }
  }
}

// for merging, change other classes to joins colours in future
function merge(ball1, ball2){
  let x = (ball1.getX() + ball2.getX())/2;
  let y = (ball1.getY() + ball2.getY())/2;
  let rad = ball1.getRad() + ball2.getRad();
  // change this to momentum scaling comparison
  let colIndex = (abs(ball1.getVelocity()) > abs(ball2.getVelocity())) ? ball1.getColIndex() : ball2.getColIndex();
  let dx = ball1.getDx() + ball2.getDx();
  let dy = ball1.getDy() + ball2.getDy();

  return new Ball(x, y, rad, colIndex, dx, dy);
}

function spawnBall(colIndex){
  if(moving){
    balls.push(new Ball(mouseX, mouseY, 10, colIndex, random(-5, 5), random(-5, 5)));
    movementDx.push(0);
    movementDy.push(0);
  } else {
    balls.push(new Ball(mouseX, mouseY, 10, colIndex, 0, 0));
    movementDx.push(0);
    movementDy.push(0);
  }
}

function keyPressed() {
  if (keyCode === 8) {
    balls.splice(0, balls.length);
    movementDx.splice(0, movementDx.length);
    movementDy.splice(0, movementDy.length);
    for (let i=0; i<balls.length; i++){
      system.removeBall(i);
    }
  }
  
  if (keyCode === 90) {
    spawnBall(0);
  }
  if (keyCode === 88) {
    spawnBall(1);
  }
  if (keyCode === 67) {
    spawnBall(2);
  }
  
  if (keyCode === 80) {
    if(moving === true){
      for(let i=0; i<balls.length; i++){
        movementDx[i] = balls[i].getDx();
        movementDy[i] = balls[i].getDy();
        balls[i].setDx(0);
        balls[i].setDy(0);
      }
      moving = false;
    } else if (moving === false) {
      for(let i=0; i<balls.length; i++){
        if(movementDx[i] != 0 && movementDy[i] != 0){
          balls[i].setDx(movementDx[i]);
          balls[i].setDy(movementDy[i]);
        } else {
          balls[i].setDx(random(-5, 5));
          balls[i].setDy(random(-5, 5));
        }
      }
      moving = true;
    }
  }
}