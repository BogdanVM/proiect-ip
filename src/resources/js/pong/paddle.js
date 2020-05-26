class Paddle {
  constructor(isLeft) {
    this.y = height / 2;
    this.w = 20;
    this.h = 100;
    this.ychange = 0;

    if (isLeft) {
      this.x = this.w;
    } else {
      this.x = width - this.w;
    }
  }

  update() {
    //this.y += this.ychange;
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

  move(steps) {
    this.y = steps;
  }
  
  ai_move(puckY)
  {
      let speed = random(0,3);
      if(abs(puckY - this.y) > 20)
      {
          if(puckY > this.y)
            this.y += speed;
          else if(puckY < this.y)
            this.y -= speed;
      }

  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}