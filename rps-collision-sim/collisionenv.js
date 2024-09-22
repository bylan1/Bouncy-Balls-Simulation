class CollisionEnv {
  constructor(ball1, ball2) {
    this.ball1 = ball1;
    this.ball2 = ball2;
  }

  collisionReaction() {
    if (this.collisionDetection()) {
      this.vectorCalculation();
      return true;
    } else {
      return false;
    }
  }

  vectorCalculation() {
    // Step 1: Calculate the normal and tangent vectors
    let deltaX = this.ball2.getX() - this.ball1.getX();
    let deltaY = this.ball2.getY() - this.ball1.getY();
    let distance = sqrt(sq(deltaX) + sq(deltaY));

    // Normalize the normal vector
    let normalX = deltaX / distance;
    let normalY = deltaY / distance;

    // Tangent vector is perpendicular to the normal vector
    let tangentX = -normalY;
    let tangentY = normalX;

    // Step 2: Resolve the velocities into normal and tangent components
    // Ball 1
    let v1n = this.ball1.getDx() * normalX + this.ball1.getDy() * normalY; // Normal component
    let v1t = this.ball1.getDx() * tangentX + this.ball1.getDy() * tangentY; // Tangential component

    // Ball 2
    let v2n = this.ball2.getDx() * normalX + this.ball2.getDy() * normalY; // Normal component
    let v2t = this.ball2.getDx() * tangentX + this.ball2.getDy() * tangentY; // Tangential component

    // Step 3: Use conservation of momentum to update the normal velocities
    let newV1n =
      (v1n * (this.ball1.getMass() - this.ball2.getMass()) +
        2 * this.ball2.getMass() * v2n) /
      (this.ball1.getMass() + this.ball2.getMass());
    let newV2n =
      (v2n * (this.ball2.getMass() - this.ball1.getMass()) +
        2 * this.ball1.getMass() * v1n) /
      (this.ball1.getMass() + this.ball2.getMass());

    // Step 4: Set the new velocities for both balls
    this.ball1.setDx(newV1n * normalX + v1t * tangentX);
    this.ball1.setDy(newV1n * normalY + v1t * tangentY);
    this.ball2.setDx(newV2n * normalX + v2t * tangentX);
    this.ball2.setDy(newV2n * normalY + v2t * tangentY);
  }

  // Change this function to consider momentum instead of velocity
  highSpeedCollision() {
    if (this.collisionDetection()) {
      let xVelocityDiff = this.ball2.getDx() - this.ball1.getDx();
      let yVelocityDiff = this.ball2.getDy() - this.ball1.getDy();
      let crashVelocity = sqrt(sq(xVelocityDiff) + sq(yVelocityDiff));

      if (crashVelocity > this.contactThreshold) {
        return true;
      } else {
        return false;
      }
    }
  }

  // implement either a explode function with confetti or a merge function joining balls into 1
  //   explode(){
  //     let x = this.ball2.getX() - this.ball1.getX();
  //     let y = this.ball2.getY() - this.ball1.getY();

  //     for(let i=0; i<10; i++){
  //       rect(x, y, 5, 3);

  //     }
  //   }

  collisionDetection() {
    let distX = this.ball2.getX() - this.ball1.getX();
    let distY = this.ball2.getY() - this.ball1.getY();
    let distance = sqrt(sq(distX) + sq(distY));

    return distance < this.ball1.getRad() + this.ball2.getRad();
  }
}
