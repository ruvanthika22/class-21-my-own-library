var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400, 100, 50, 80);
  movingRect= createSprite(400, 800, 80, 30);
  movingRect.velocityY =-5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(255,255,255);  
  bounce(movingRect,fixedRect);
//   movingRect.x=World.mouseX;
//   movingRect.y=World.mouseY;
//   console.log(movingRect.y-fixedRect.y)
// if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
//   fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
//   movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
//   fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
//   {movingRect.shapeColor="red";
//   fixedRect.shapeColor="red";

// }
// else{movingRect.shapeColor="green";
// fixedRect.shapeColor="green";

// }
  drawSprites();
}

