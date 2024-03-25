class Player extends Sprite {
  constructor({ imageSrc }) {
    super({ imageSrc });
    this.maxSpeed = 10;
    this.width = 30;
    this.height = 50;
    this.position = {
      x: canvas.width / 2 - this.width / 2,
      y: canvas.height / 2 + 150,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.acceleration = {
      x: 0,
      y: 0,
    };
  }

  acellerate() {
    if (this.acceleration.x >= this.maxSpeed)
      this.acceleration.x = this.maxSpeed;
    if (this.acceleration.x <= -this.maxSpeed)
      this.acceleration.x = -this.maxSpeed;
    if (this.acceleration.y >= this.maxSpeed)
      this.acceleration.y = this.maxSpeed;
    if (this.acceleration.y <= -this.maxSpeed)
      this.acceleration.y = -this.maxSpeed;

    if (
      (this.acceleration.x <= this.maxSpeed ||
        this.acceleration >= -this.maxSpeed) &&
      this.velocity.x != 0
    ) {
      if (this.velocity.x > 0) this.acceleration.x++;
      else if (this.velocity.x < 0) this.acceleration.x--;
    }
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
    this.position.x += this.velocity.x + this.acceleration.x;
    this.position.y += this.velocity.y + this.acceleration.y;
    this.acellerate();
  }
}
