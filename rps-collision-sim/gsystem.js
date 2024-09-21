class GSystem{
  constructor(ball, balls){
    this.ball = ball;
    this.balls = balls;
    this.gravity = 0;
    this.gravRad = balls[0].getRad() * 10;
    this.nonColourBalls = [];
  }
  
  changeVelocity(gravity, moving){
    this.gravity = gravity;
    this.organiseColours();
    
    for(let i=0; i<this.nonColourBalls.length; i++){
      let ballX = this.nonColourBalls[i].getX();
      let ballY = this.nonColourBalls[i].getY();
      let ballDx = this.nonColourBalls[i].getDx();
      let ballDy = this.nonColourBalls[i].getDy();

      let distX = this.ball.getX() - ballX;
      let distY = this.ball.getY() - ballY;

      let distance = sqrt(distX * distX + distY * distY);

      if (distance < this.gravRad && moving){
        let gravStrength = this.gravity / (distance + 1e-3);

        this.nonColourBalls[i].setDx(ballDx + distX * gravStrength)
        this.nonColourBalls[i].setDy(ballDy + distY * gravStrength)
      }
    }
  }
  
  organiseColours(){
    for(let i=0; i<this.balls.length; i++){
      if(this.ball.getColIndex() != this.balls[i].getColIndex()){
        this.nonColourBalls.push(this.balls[i]);
      }
    }
  }
  
  removeBall(inc){
    this.balls.splice(inc, 1);
  }
}