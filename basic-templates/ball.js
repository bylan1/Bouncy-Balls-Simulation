class Ball {
  constructor(x,y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = 15;
    this.rgb = [0, 0, 0]
  }
  
  drawCircle(){
    fill(this.rgb[0], this.rgb[1], this.rgb[2]);
    circle(this.x, this.y, this.rad*2);
  }
  
  moveCircle(){
    this.x += this.dx;
    this.y += this.dy;
  }
  
  checkBoundaries(){
    if (this.x > width - this.rad || this.x < this.rad){
      this.dx *= -1;
      if (this.x >= width - this.rad){
        this.x = width - this.rad;
      } else {
        this.x = this.rad;
      }
      this.rgb = [0, 0, 0];
      this.rgb[floor(random(0,3))] += 255;
    }
    
    if (this.y > height || this.y < this.rad){
      this.dy *= -1;
      if (this.y >= height - this.rad){
        this.y = height - this.rad;
      } else {
        this.y = this.rad;
      }
      this.rgb = [0, 0, 0];
      this.rgb[floor(random(0,3))] += 255;
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