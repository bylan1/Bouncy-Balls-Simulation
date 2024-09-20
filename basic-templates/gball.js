class GBall {
  constructor(x,y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.gravity = 1;

    // ^v comment out for each other
    
    // this.gravity = round(random(0, 1)) * 2 - 1;
    // this.grav_dir = random()
  }
  
  drawCircle(){
    fill(0);
    circle(this.x, this.y, 30);
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
    if (this.x >= width - 15 || this.x <= 15){
      this.dx *= -1;
      if (this.x >= width - 15){
        this.x = width - 15;
      } else {
        this.x = 15;
      }
    }
    
    if (this.y >= height - 15 || this.y <= 15){
      this.dy *= -1;
      if (this.y >= height - 15){
        this.y = height - 15;
      } else {
        this.y = 15;
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