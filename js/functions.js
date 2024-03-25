setInterval(() => {
  enemies.push(new Enemy({ imageSrc: "./img/enemy_car.png" }));
}, 500);

const checkWallCollision = function (player) {
  if (player.position.x < 0) {
    player.position.x = 0;
  } else if (player.position.x + player.width > canvas.width)
    player.position.x = canvas.width - player.width;

  if (player.position.y < 0) player.position.y = 0;
  else if (player.position.y + player.height > canvas.height)
    player.position.y = canvas.height - player.height;
};

const checkPlayerCollision = function (player, enemy) {
  if (
    player.position.x + player.width >= enemy.position.x &&
    player.position.x <= enemy.position.x + enemy.width &&
    player.position.y + player.height >= enemy.position.y &&
    player.position.y <= enemy.position.y + enemy.height
  ) {
    player.position.x = 99999;
    alert("GAME OVER, APERTE OK PARA REINICIAR");
    window.location.reload();
  }
};

const generateEnemies = function (enemies) {
  enemies.forEach((enemy) => {
    enemy.draw();
    enemy.move();
    checkPlayerCollision(player, enemy);
  });
};

const gameLoop = function () {
  if (score % 10 === 0) scoreHolder.innerHTML = score;
  roadBackground.draw();

  player.velocity.x = 0;
  player.velocity.y = 0;

  if (keys.w.pressed) player.velocity.y = -1;
  else if (keys.s.pressed) player.velocity.y = 1;

  if (keys.a.pressed) player.velocity.x = -1;
  else if (keys.d.pressed) player.velocity.x = 1;

  generateEnemies(enemies);
  player.draw();
  player.move();
  checkWallCollision(player);
  score++;
  window.requestAnimationFrame(gameLoop);
};
