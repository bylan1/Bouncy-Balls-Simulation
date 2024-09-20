class CollisionEnv {
  constructor(ball1, ball2){
    this.ball1 = ball1;
    this.ball2 = ball2;
  }
  
  collisionReaction(){
    if(this.compareDistance()){
      if(this.ball1.getVelocity() > this.ball2.getVelocity()){
        let ind = this.ball1.getColIndex();
        this.ball2.setColIndex(ind);
      } else if (this.ball2.getVelocity() > this.ball1.getVelocity()) {
        let ind = this.ball2.getColIndex();
        this.ball1.setColIndex(ind);
      }
      this.vectorCalculation();
    }
  }
  
  vectorCalculation(){
    let newDx1 = this.calculateNewVelocity(this.ball1.getDx(), this.ball2.getDx(), this.ball1.getX(), this.ball2.getX(), this.ball1.getMass(), this.ball2.getMass(), this.ball1.getRad(), this.ball2.getRad());
    let newDy1 = this.calculateNewVelocity(this.ball1.getDy(), this.ball2.getDy(), this.ball1.getY(), this.ball2.getY(), this.ball1.getMass(), this.ball2.getMass(), this.ball1.getRad(), this.ball2.getRad());
    let newDx2 = this.calculateNewVelocity(this.ball2.getDx(), this.ball1.getDx(), this.ball2.getX(), this.ball1.getX(), this.ball2.getMass(), this.ball1.getMass(), this.ball2.getRad(), this.ball1.getRad());
    let newDy2 = this.calculateNewVelocity(this.ball2.getDy(), this.ball1.getDy(), this.ball2.getY(), this.ball1.getY(), this.ball2.getMass(), this.ball1.getMass(), this.ball2.getRad(), this.ball1.getRad());
    
    this.ball1.setDx(newDx1);
    this.ball1.setDy(newDy1);
    this.ball2.setDx(newDx2);
    this.ball2.setDy(newDy2);
  }
  
  calculateNewVelocity(v1, v2, p1, p2, m1, m2, r1, r2){
    let impactDiff = p2 - p1;
    let velocityDiff = v2-v1;
    
    let numerator = 2 * m2 * v2 + (v1 * (m1 - m2));
    let denominator = m1+m2;
    let momentum = numerator/denominator;
    
    return momentum;
  }
  
  
  compareDistance(){
    let distX = this.ball1.getX() - this.ball2.getX();
    let distY = this.ball1.getY() - this.ball2.getY();
    let distance = sqrt(sq(distX) + sq(distY));
    return distance < (this.ball1.getRad() + this.ball2.getRad());
  }
}