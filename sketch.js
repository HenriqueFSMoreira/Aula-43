var canvas;
var backgroundImage;
var bgImg;
var database, gameState;
var form, player;
var playerCount, allPlayers, car1Img, car1, car2, car2Img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image, blastImage;
var fuels, powerCoins, obstacles;

var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  track = loadImage("./assets/PISTA.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if (gameState === 1){
    game.play();
  }
  if (playerCount === 2){
    game.update(1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
