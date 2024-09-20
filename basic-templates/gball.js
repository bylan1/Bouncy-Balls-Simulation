class GBall {
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = 15;
    this.gravity = 1;

    // ^v comment out for each other
    
    // this.gravity = round(random(0, 1)) * 2 - 1;
    // this.grav_dir = random()
  }
  
  drawCircle(){
    fill(0);
    circle(this.x, this.y, this.rad*2);
  }
  
  moveCircle(){
    this.dy += this.gravity;
    
    // ^v comment out for each other
    
    // if (this.grav_dir > 0.5){
    //   this.dy += this.gravity;
    // } else {
    //   this.dx += this.gravity;
    // }
    
    this.x += this.dx;
    this.y += this.dy;
  }
  
  checkBoundaries(){
    if (this.x >= width - this.rad || this.x <= this.rad){
      this.dx *= -1;
      if (this.x >= width - this.rad){
        this.x = width - this.rad;
      } else {
        this.x = this.rad;
      }
    }
    
    if (this.y >= height - this.rad || this.y <= this.rad){
      this.dy *= -1;
      if (this.y >= height - this.rad){
        this.y = height - this.rad;
      } else {
        this.y = this.rad;
      }
    }
  }
  
  getX(){
    return this.x;
  }
  
  getY(){
    return this.y;
  }
  
  setX(x){
    this.x = x;
  }
  
  setY(y){
    this.y = y;
  }
  
  getDx(){
    return this.dx;
  }
  
  getDy(){
    return this.dy;
  }
  
  setDx(dx){
    this.dx = dx;
  }
  
  setDy(dy){
    this.dy = dy;
  }
}