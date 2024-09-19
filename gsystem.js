class GSystem{
  constructor(balls, gravity){
    this.balls = balls;
    this.gravity = gravity;
    
  }
  
  changeVelocity(){
    for(let i=0; i<this.balls.length; i++){
      if(typeof this.balls[i] != 'undefined'){
        let ballX = this.balls[i].getX();
        let ballY = this.balls[i].getY();
        let ballDx = this.balls[i].getDx();
        let ballDy = this.balls[i].getDy();

        let distX = mouseX - ballX;
        let distY = mouseY - ballY;
        
        let distance = sqrt(distX * distX + distY * distY);
        
        let gravStrength = this.gravity / (distance + 1e-3);

        this.balls[i].setDx(ballDx + distX * gravStrength)
        this.balls[i].setDy(ballDy + distY * gravStrength)
      }
    }
  }
  
  removeBall(inc){
    delete this.balls[inc];
  }
}