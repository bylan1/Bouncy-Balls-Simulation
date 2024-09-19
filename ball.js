class Ball {
  constructor(x,y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rgb = [0, 0, 0]
  }
  
  drawCircle(){
    fill(this.rgb[0], this.rgb[1], this.rgb[2]);
    circle(this.x, this.y, 30);
  }
  
  moveCircle(){
    this.x += this.dx;
    this.y += this.dy;
  }
  
  checkBoundaries(){
    if (this.x > 585 || this.x < 15){
      this.dx *= -1;
      this.rgb = [0, 0, 0];
      this.rgb[floor(random(0,3))] += 255;
    }
    
    if (this.y > 585 || this.y < 15){
      this.dy *= -1;
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