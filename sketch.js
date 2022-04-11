var bg,bgImg;
var ground;
var bird,birdImg;

var topGround;
var bottomGround;

var obstacleTop, obsTop1;
var obstacleBottom, obsBottom1;

var gameOver, gameOverImg;
var restart, restartImg;

function preload(){
bgImg = loadImage("bg.png");

birdImg = loadImage("bird.png");
//birdImg = loadAnimation("bird.png","bird2.png");

obsTop1 = loadImage("obsTop1.png");


gameOverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3

  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
  
  bird = createSprite(100,200,20,50);
  bird.addAnimation("bird",birdImg);
  bird.scale = 0.2;

  topObstaclesGroup = new Group();
 bottomObstaclesGroup = new Group();
  barGroup = new Group();

  gameOver = createSprite(220,200);
restart = createSprite(220,240);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;
restart.addImage(restartImg);
restart.scale = 0.5;
gameOver.visible = false;
restart.visible = false;
}

function draw() {
  background(255,255,255);  
  background("black");
 
  if(keyDown("space")) {
    bird.velocityY = -6 ;
    
  }

  bird.velocityY = bird.velocityY + 2;

  drawSprites();
  spawnObstaclesTop();
  spawnObstaclesBottom();
  Bar();
}


function spawnObstaclesTop(){
 
  if(World.frameCount % 60 === 0) {
     obstacleTop = createSprite(400,50,40,50);
     
     obstacleTop.scale = 0.1;
     obstacleTop.velocityX = -4

     obstacleTop.y = Math.round(random(10,100));
  
  var rand = Math.round(random(1));
  switch(rand) {
  case 1: obstacleTop.addImage(obsTop1);
  break;

  default: break;
  }
  obstacleTop.lifetime = 100;
  bird.depth = bird.depth + 1;
 }
}

function spawnObstaclesBottom(){
 
  if(World.frameCount % 60 === 0) {
     obstacleBottom = createSprite(400,350,40,50);
     
     obstacleBottom.scale = 0.07;
     obstacleBottom.velocityX = -4

     obstacleBottom.y = Math.round(random(10,100));
  
  var rand = Math.round(random(1));
  switch(rand) {
  case 1: obstacleBottom.addImage(obsBottom1);
  break;

  default: break;
  }
  obstacleBottom.lifetime = 100;
  bird.depth = bird.depth + 1;
  bottomObstaclesGroup.add(obstacleBottom);
 }
}

function Bar(){
  if(World.frameCount % 60 === 0) 
  {
    var bar = createSprite(400,200,10,800);
    bar.velocityX = -6;
     bar.depth = bird.depth;
      bar.lifetime = 70; 
      bar.visible = false;
 }
}