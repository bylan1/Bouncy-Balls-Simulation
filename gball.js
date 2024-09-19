class G_Ball {
  constructor(x,y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.gravity = round(random(0, 1)) * 2 - 1;
    this.grav_dir = random()
  }
  
  drawCircle(){
    fill(0)
    rect(this.x, this.y, 20, 20)
  }
  
  moveCircle(){
    if (this.grav_dir > 0.5){
      this.dy += this.gravity;
    } else {
      this.dx += this.gravity;
    }
    // this.dy += this.gravity;
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