var fixedRectangle, movingRectangle
var gameObject1
var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  movingRectangle = createSprite(200,200,50,50);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;

  fixedRectangle = createSprite(100,100,50,50);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.debug = true;

  gameObject1 = createSprite(50,50,50,50);


}

function draw() {
  background(0);  

  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
  
  if (isTouching(gameObject1,movingRectangle)) {

    gameObject1.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  } 
  else{
    gameObject1.shapeColor = "green";
    movingRectangle.shapeColor = "green";

  }

  bounceOff(movingRect,fixedRect);

 

  drawSprites();
}