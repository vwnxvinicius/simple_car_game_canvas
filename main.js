const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const scoreHolder = document.querySelector("#score_holder");
const keys = {
  w: { pressed: false },
  s: { pressed: false },
  a: { pressed: false },
  d: { pressed: false },
};
let score = 0;

canvas.width = 500;
canvas.height = window.innerHeight;

const roadBackground = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/road_background.png",
});
const player = new Player({
  imageSrc: "./img/car.png",
});

const enemies = [];

gameLoop();
