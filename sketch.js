var fixedrect,movingRect;
var gameObject1, gameObject2;
function setup() {
  createCanvas(800,400);
 fixedrect=createSprite(200,100,50,80);
 movingRect= createSprite(400,100,20,50);
 fixedrect.shapeColor="green";
 movingRect.shapeColor="green";
 //movingRect.velocityX = -1;
 //fixedrect.velocityX = +1;
 gameObject1=createSprite(100,100,50,50);
 gameObject1.shapeColor="yellow";
 gameObject1. velocityX= 3;

 gameObject2=createSprite(400,100,50,50);
 gameObject2.shapeColor="yellow";
 gameObject2.velocityX= -3;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedrect)){
    fixedrect.shapeColor="red";
    movingRect.shapeColor="red";
    movingRect.scale=2;
  }
  else{
    fixedrect.shapeColor="green";
    movingRect.shapeColor="green";
    movingRect.scale=1;
  }
  

  if(isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor="red";
    movingRect.shapeColor="red";
    movingRect.scale=2;
  }
  else{
    gameObject1.shapeColor="green";
    movingRect.shapeColor="green";
    movingRect.scale=1;
  }

  bounceOff(gameObject1,gameObject2);
  


 

 
}

