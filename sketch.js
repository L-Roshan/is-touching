var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect=createSprite(200,200,50,50);
 movingRect.shapeColor="green";

 fixedRect=createSprite(400,200,70,70);
 fixedRect.shapeColor="green";
}

function draw() {
  background(0);
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2)
    {
fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";
    }else{
      fixedRect.shapeColor="orange";
      movingRect.shapeColor="orange";   
    }
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  drawSprites();
}