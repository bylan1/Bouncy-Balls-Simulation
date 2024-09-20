class Ball {
  constructor(x,y, dx, dy, rad, colIndex){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.mass = rad*2;
    this.colour = [0, 0, 0];
    this.colour[colIndex] = 255;
  }
  
  drawCircle(){
    noStroke();
    fill(this.colour[0], this.colour[1], this.colour[2]);
    circle(this.x, this.y, this.rad*2);
  }
  
  moveCircle(){
    this.x += this.dx;
    this.y += this.dy;
  }
  
  checkBoundaries(){
    if (this.x > width - this.rad || this.x < this.rad){
      this.dx *= -1;
    }
    
    if (this.y > height - this.rad || this.y < this.rad){
      this.dy *= -1;
    }
  }
  
  getRad(){
    return this.rad;
  }
  
  getMass(){
    return this.mass;
  }
  
  getColIndex(){
    for (let i=0; i<this.colour.length; i++){
      if (this.colour[i] === 255){
        return i;
      }
    }
  }
  
  setColIndex(colIndex){
    this.colour = [0, 0, 0];
    this.colour[colIndex] = 255;
  }
  
  getVelocity(){
    return sqrt(sq(this.dx) + sq(this.dy));
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