window.addEventListener("keydown", (event) => {
  switch (event.key.toLowerCase()) {
    case "w":
      keys.w.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key.toLowerCase()) {
    case "w":
      keys.w.pressed = false;
      player.acceleration.y = 0;
      break;
    case "s":
      keys.s.pressed = false;
      player.acceleration.y = 0;
      break;
    case "a":
      keys.a.pressed = false;
      player.acceleration.x = 0;
      break;
    case "d":
      keys.d.pressed = false
      player.acceleration.x = 0;
      break;
  }
});
