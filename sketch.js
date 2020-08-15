var fixedRect;
var movingRect;
var gameObj1,gameObj2,gameObj3,gameObj4;

function setup() {
  
  createCanvas(1200,800);
  fixedRect= createSprite (600,400,50,80);
  fixedRect.shapeColor= "green";
  fixedRect.velocityX=3;
  fixedRect.velocityY=3;
  
  movingRect= createSprite (400,200,80,30);
  movingRect.shapeColor= "green";

  gameObj1 = createSprite (200,100,50,50);
  gameObj1.shapeColor= "green";
  gameObj2 = createSprite (400,100,50,50);
  gameObj2.shapeColor= "green";
  gameObj3 = createSprite (600,100,50,50);
  gameObj3.shapeColor= "green";
  gameObj4 = createSprite (800,100,50,50);
  gameObj4.shapeColor= "green";
}


function draw() {
  background(0,0,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY

  if(isTouching(movingRect,gameObj1)){
    movingRect.shapeColor="red"
    gameObj1.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    gameObj1.shapeColor="green" 
  }

  if(isTouching(movingRect,gameObj2)){
    movingRect.shapeColor="blue"
    gameObj2.shapeColor="blue"
  }
  else{
    movingRect.shapeColor="green"
    gameObj2.shapeColor="green" 
  }

  if(isTouching(movingRect,gameObj3)){
    movingRect.shapeColor="white"
    gameObj3.shapeColor="white"
  }
  else{
    movingRect.shapeColor="green"
    gameObj3.shapeColor="green" 
  }
  
  if(isTouching(movingRect,gameObj4)){
    movingRect.shapeColor="black"
    gameObj4.shapeColor="black"
  }
  else{
    movingRect.shapeColor="green"
    gameObj4.shapeColor="green" 
  }
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="purple"
    fixedRect.shapeColor="purple"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green" 
  }

  bounceOff(movingRect,fixedRect)
   
  drawSprites();
}




