class Enemy extends Sprite {
  constructor({ imageSrc }) {
    super({ imageSrc });
    this.position = {
      x: Math.random() * (canvas.width - 30),
      y: -200,
    };
    this.velocity = {
      y: 1,
    };
    this.acceleration = {
      y: 0,
    };
    this.maxSpeed = score / 90;
    this.width = 20;
    this.height = 60;
  }

  acellerate() {
    if (this.acceleration.y >= this.maxSpeed)
      this.acceleration.y = this.maxSpeed;
    if (this.acceleration.y <= -this.maxSpeed)
      this.acceleration.y = -this.maxSpeed;
    if (
      (this.acceleration.y <= this.maxSpeed ||
        this.acceleration.y >= -this.maxSpeed) &&
      this.velocity.y != 0
    ) {
      if (this.velocity.y > 0) this.acceleration.y++;
      else if (this.velocity.y < 0) this.acceleration.y--;
    }
  }

  move() {
    this.position.y += this.velocity.y + this.acceleration.y;
    this.acellerate();
  }
}
