class GSystem{
  constructor(balls){
    this.balls = balls;
    this.gravity = 0;
  }
  
  changeVelocity(gravity, moving) {
    this.gravity = gravity;

    for (let i = 0; i < this.balls.length; i++) {
      let ball1 = this.balls[i];

      for (let j = 0; j < this.balls.length; j++) {
        if (i === j) continue;

        let ball2 = this.balls[j];

        if (ball1.getColIndex() !== ball2.getColIndex()) {
          let distX = ball2.getX() - ball1.getX();
          let distY = ball2.getY() - ball1.getY();
          let distance = sqrt(sq(distX) + sq(distY));

          if (moving && distance > 0) {
            let gravStrength = this.gravity * (ball1.getMass() * ball2.getMass()) / distance;

            let acc1 = gravStrength / ball1.getMass();
            let acc2 = gravStrength / ball2.getMass();

            ball1.setDx(ball1.getDx() + (distX / distance) * acc1);
            ball1.setDy(ball1.getDy() + (distY / distance) * acc1);

            ball2.setDx(ball2.getDx() - (distX / distance) * acc2);
            ball2.setDy(ball2.getDy() - (distY / distance) * acc2);
          }
        }
      }
    }
  }
  
  removeBall(inc){
    this.balls.splice(inc, 1);
  }
}