class Ball {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 2;
    this.dy = 2;
    this.gravity = 0;
    this.gravRand = Math.random();
    this.dirRand = Math.random();
  }
  
  drawCircle(){
    fill(0)
    circle(this.x, this.y, 30)
  }
  
  moveCircle(){
    if (this.gravRand > 0.5){
      this.gravity = 1;
    } else {
      this.gravity = -1;
    }
    if (this.dirRand > 0.5){
      this.dy += this.gravity;
    } else {
      this.dx += this.gravity;
    }
      
    this.x += this.dx;
    this.y += this.dy;
  }
  
  checkBoundaries(){
    if (this.x > 585 || this.x < 15){
      this.dx *= -1
    }
    
    if (this.y > 585 || this.y < 15){
      this.dy *= -1
    }
  }
}