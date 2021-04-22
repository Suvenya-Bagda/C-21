var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80); //x,y=400,100 for bounceOff, x,y=600,400 for isTouching
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30); //x,y=400,800 for bounceOff, x,y=400,200 for isTouching
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;

  gameObject2 = createSprite(200, 100, 50, 80);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject3 = createSprite(300, 100, 50, 80);
  gameObject3.shapeColor = "green";
  gameObject3.debug = true;

  gameObject4 = createSprite(400, 100, 50, 80);
  gameObject4.shapeColor = "green";
  gameObject4.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
/*
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 if(isTouching(movingRect,gameObject1)){
   movingRect.shapeColor="blue";
   gameObject1.shapeColor="blue";
 }
 else{
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green"; 
 }
 */
  drawSprites();
}
